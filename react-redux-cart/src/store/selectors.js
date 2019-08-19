const showCart = (cart, products) => {
  return cart.productIdInCart.map(ele => {
    const product = products.find(item => item.id === ele);
    return {
      ...product,
      qty: cart.quantityById[ele]
    };
  });
};
const totalCost = (cart, products) => {
  return showCart(cart, products).reduce(
    (res, ele) => res + ele.price * ele.qty,
    0
  );
};
export { showCart, totalCost };
