export function serveToTable(payload) {
  return {
    restaurant: "restaurant.glitchjs.com",
    served: true,
    ...payload
  };
}
