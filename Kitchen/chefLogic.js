import { getMenuItem } from "../Menu/items.js";

export function cookOrder(item){
  const m = getMenuItem(item);

  if(!item) return { ok:false, status:400, error:"Invalid order." };
  if(!m) return { ok:false, status:404, error:"Not on menu." };
  if(!m.official) return { ok:false, status:403, error:"Forbidden item." };
  if(!m.available) return { ok:false, status:503, error:"Unavailable." };

  return {
    ok:true,
    status:200,
    item,
    food:m.emoji,
    price:m.price
  };
}
