export function cartSum(hatCart) {
  const totalPrice = hatCart.reduce(
    (accumulator, product) => accumulator + product.cart * product.price,
    0,
  );
  return totalPrice;
}
