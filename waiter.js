import { valid } from "./Security-Guards/validate.js";
import { serveToTable } from "./Tables/tableResponse.js";
import { bill } from "./Billing/bill.js";

export default {
  async fetch(req, env) {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      return new Response(`Welcome to our restaurant!\n\nHow can I help you?\n\n[MENU]`, {
        headers: { "content-type": "text/plain; charset=UTF-8" }
      });
    }

    if (url.pathname === "/order") {
      const item = url.searchParams.get("item");

      if (!valid(item)) {
        return new Response(JSON.stringify({ ok: false, status: 400, error: "The waiter could not understand your order." }, null, 2), {
          status: 400,
          headers: { "content-type": "application/json; charset=UTF-8" }
        });
      }

      if (!env.CHEF) {
        return new Response(JSON.stringify({ ok: false, status: 500, error: "Your food will be delayed due to an error with the chef." }, null, 2), {
          status: 500,
          headers: { "content-type": "application/json; charset=UTF-8" }
        });
      }

      const res = await env.CHEF.fetch("https://chef.internal/cook?item=" + encodeURIComponent(item));
      const data = await res.json();

      if (!res.ok) {
        return new Response(JSON.stringify(serveToTable({ ok: false, status: res.status, error: data.error || "The kitchen rejected the order." }), null, 2), {
          status: res.status,
          headers: { "content-type": "application/json; charset=UTF-8" }
        });
      }

      const receipt = bill(item, data.price);

      return new Response(JSON.stringify(serveToTable({
        ok: true,
        waiter: "A Worker",
        chef: "B Worker",
        table: "served",
        item: data.item,
        food: data.food,
        price: data.price,
        currency: data.currency,
        kitchenMessage: data.message,
        receipt
      }), null, 2), {
        status: 200,
        headers: { "content-type": "application/json; charset=UTF-8" }
      });
    }

    return new Response("404 Not Found: That item is not on the menu.", {
      status: 404,
      headers: { "content-type": "text/plain; charset=UTF-8" }
    });
  }
};
