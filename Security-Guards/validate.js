export function valid(item) {
  if (!item) return false;
  if (item.length > 40) return false;
  return /^[a-zA-Z]+$/.test(item);
}
