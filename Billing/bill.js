import { getMenuItem } from "../Menu/items.js";

export function calculateTotal(item) {
  const menuItem = getMenuItem(item);
  return menuItem ? menuItem.price : 0;
}

export function bill(item, price) {
  return {
    item,
    total: typeof price === "number" ? price : calculateTotal(item),
    currency: "VTC",
    status: "charged",
    message: "Your table has been charged."
  };
}
