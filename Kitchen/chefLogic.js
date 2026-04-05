import { getMenuItem } from "../Menu/items.js";

export function cookOrder(item) {
  const m = getMenuItem(item);

  if (!item) return { ok: false, status: 400, error: "The waiter could not understand your order." };
  if (!m) return { ok: false, status: 404, error: "That item is not on the menu." };
  if (!m.official) return { ok: false, status: 403, error: "Unofficial menu items are not allowed in this restaurant." };
  if (!m.available) return { ok: false, status: 503, error: "The kitchen cannot prepare this item right now." };

  return {
    ok: true,
    status: 200,
    item: item.toLowerCase(),
    food: m.emoji,
    price: m.price,
    currency: "VTC",
    message: "Order cooked successfully."
  };
}
