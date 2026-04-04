import { cookOrder } from "./Kitchen/chefLogic.js";

export default {
  async fetch(req){
    const url = new URL(req.url);
    if(url.pathname==="/cook"){
      const item = url.searchParams.get("item");
      const res = cookOrder(item);
      return new Response(JSON.stringify(res),{status:res.status});
    }
    return new Response("Chef ready");
  }
};
