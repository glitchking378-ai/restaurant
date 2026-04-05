const WAITER = process.env.WAITER_URL || "http://localhost:8787";

try {
  const res = await fetch(WAITER);
  const text = await res.text();

  console.log("Waiter says:\n", text);

  if (!res.ok) {
    console.error(`Waiter bot failed with status ${res.status}`);
    process.exit(1);
  }

  process.exit(0);
} catch (error) {
  console.error("Waiter bot crashed:", error);
  process.exit(1);
}
