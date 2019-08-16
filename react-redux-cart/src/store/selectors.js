export const showCart = (productIdInCart, quantityById, products) => {
  return productIdInCart.map(ele => {
    const product = products.find(item => item.id === ele);
    console.log(product);
    return {
      ...product,
      qty: quantityById[ele]
    };
  });
};
