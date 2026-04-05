const CHEF = process.env.CHEF_URL || "http://localhost:8787";

try {
  const res = await fetch(CHEF + "/cook?item=pizza");
  const data = await res.text();

  console.log("Chef Response:", data);

  if (!res.ok) {
    console.error(`Chef bot failed with status ${res.status}`);
    process.exit(1);
  }

  process.exit(0);
} catch (error) {
  console.error("Chef bot crashed:", error);
  process.exit(1);
}
