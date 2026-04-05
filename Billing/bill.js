import { getMenuItem } from "../Menu/items.js";

export function calculateTotal(item) {
  const menuItem = getMenuItem(item);
  return menuItem ? menuItem.price : 0;
}

export function bill(item, price) {
  const total = typeof price === "number" && Number.isFinite(price) && price >= 0
    ? price
    : calculateTotal(item);

  return {
    item,
    total,
    currency: "VTC",
    status: "charged",
    message: "Your table has been charged."
  };
}
