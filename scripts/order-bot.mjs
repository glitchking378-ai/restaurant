const WAITER = process.env.WAITER_URL || "http://localhost:8787";

const res = await fetch(`${WAITER}/order?item=burger`);
const data = await res.text();

console.log("Order Bot Response:", data);

if (!res.ok) {
  process.exit(1);
}
