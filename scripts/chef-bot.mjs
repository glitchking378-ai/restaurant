const CHEF = process.env.CHEF_URL || "http://localhost:8787";

const res = await fetch(CHEF + "/cook?item=pizza");
const data = await res.text();

console.log("Chef Response:", data);
