export function bill(item, price){
  return {
    item,
    total:price,
    status:"charged"
  };
}
