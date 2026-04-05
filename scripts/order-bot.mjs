const WAITER = process.env.WAITER_URL || "http://localhost:8787";

try {
  const res = await fetch(`${WAITER}/order?item=burger`);
  const data = await res.text();

  console.log("Order Bot Response:", data);

  if (!res.ok) {
    console.error(`Order bot failed with status ${res.status}`);
    process.exit(1);
  }

  process.exit(0);
} catch (error) {
  console.error("Order bot crashed:", error);
  process.exit(1);
}
