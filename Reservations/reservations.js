const db = new Map();

export function reserve(name){
  const id = Math.random().toString(36).slice(2,8);
  db.set(id,{name});
  return {id,name};
}
