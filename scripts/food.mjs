const WAITER = process.env.WAITER_URL || "http://localhost:8787";

const res = await fetch(WAITER + "/order?item=fries");
const data = await res.text();

console.log("Food Pipeline:", data);
