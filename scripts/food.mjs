const WAITER = process.env.WAITER_URL || "http://localhost:8787";

try {
  const res = await fetch(WAITER + "/order?item=fries");
  const data = await res.text();

  console.log("Food Pipeline:", data);

  if (!res.ok) {
    console.error(`Food workflow failed with status ${res.status}`);
    process.exit(1);
  }

  process.exit(0);
} catch (error) {
  console.error("Food workflow crashed:", error);
  process.exit(1);
}
