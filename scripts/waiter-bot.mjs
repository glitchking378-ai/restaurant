const WAITER = process.env.WAITER_URL || "http://localhost:8787";

const res = await fetch(WAITER);
const text = await res.text();

console.log("Waiter says:\n", text);
