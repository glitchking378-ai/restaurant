export default {
  async fetch(req, env){
    const url = new URL(req.url);

    if(url.pathname==="/"){
      return new Response(`Welcome to our restaurant!\n\nHow can I help you?\n\n[MENU]`);
    }

    if(url.pathname==="/order"){
      const item = url.searchParams.get("item");

      const res = await env.CHEF.fetch("https://chef/cook?item="+item);
      const data = await res.json();

      return new Response(JSON.stringify(data));
    }

    return new Response("Not Found",{status:404});
  }
};