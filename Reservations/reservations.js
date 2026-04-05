const db = new Map();

export function reserve(name) {
  if (typeof name !== "string" || !name.trim()) {
    return { ok: false, status: 400, error: "Reservation name is required." };
  }

  const id = Math.random().toString(36).slice(2, 8);
  const cleanName = name.trim();
  db.set(id, { name: cleanName, status: "reserved" });
  return { ok: true, id, name: cleanName, status: "reserved" };
}

export function getReservation(id) {
  return db.get(id) || null;
}
