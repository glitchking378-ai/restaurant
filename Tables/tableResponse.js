export function serveToTable(payload) {
  const ok = Boolean(payload?.ok);
  return {
    restaurant: "restaurant.glitchjs.com",
    served: ok,
    ...payload
  };
}
