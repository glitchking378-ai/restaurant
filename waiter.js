import { valid } from "./Security-Guards/validate.js";
import { serve } from "./Tables/tableResponse.js";
import { bill } from "./Billing/bill.js";

export default {
  async fetch(req, env){
    const url = new URL(req.url);

    if(url.pathname==="/"){
      return new Response(`Welcome to our restaurant!\n\nHow can I help you?\n\n[MENU]`);
    }

    if(url.pathname==="/order"){
      const item = url.searchParams.get("item");

      if(!valid(item)){
        return new Response("Bad Request",{status:400});
      }

      const res = await env.CHEF.fetch("https://chef/cook?item="+item);
      const data = await res.json();

      if(!res.ok){
        return new Response(JSON.stringify(data),{status:res.status});
      }

      const receipt = bill(item,data.price);

      return new Response(JSON.stringify(
        serve({...data, receipt})
      ));
    }

    return new Response("Not Found",{status:404});
  }
};
