const db = new Map();

export function reserve(name) {
  const id = Math.random().toString(36).slice(2, 8);
  db.set(id, { name, status: "reserved" });
  return { id, name, status: "reserved" };
}

export function getReservation(id) {
  return db.get(id) || null;
}
