export const MENU = {
  burger: { price: 12, available: true, official: true, emoji: "🍔" },
  pizza:  { price: 15, available: true, official: true, emoji: "🍕" },
  fries:  { price: 6,  available: true, official: true, emoji: "🍟" },
  drink:  { price: 4,  available: true, official: true, emoji: "🥤" },
  dragonsteak: { price: 999, available: true, official: false, emoji: "🐉" },
  icecream: { price: 7, available: false, official: true, emoji: "🍨" }
};

export function getMenu() {
  return MENU;
}

export function getMenuItem(item) {
  return MENU[item?.toLowerCase()] || null;
}
