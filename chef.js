import { cookOrder } from "./Kitchen/chefLogic.js";

export default {
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/cook") {
      const item = url.searchParams.get("item");
      const res = cookOrder(item);
      return new Response(JSON.stringify(res, null, 2), {
        status: res.status,
        headers: { "content-type": "application/json; charset=UTF-8" }
      });
    }

    if (url.pathname === "/health") {
      return new Response(JSON.stringify({ kitchen: "open", chef: "awake" }, null, 2), {
        headers: { "content-type": "application/json; charset=UTF-8" }
      });
    }

    return new Response("Chef ready", {
      headers: { "content-type": "text/plain; charset=UTF-8" }
    });
  }
};
