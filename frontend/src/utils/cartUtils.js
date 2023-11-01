export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  //Calculating Items Cost
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  //Calculating GST (tax - 18%)
  state.taxPrice = addDecimals(Number((0.18 * state.itemsPrice).toFixed(2)));

  //Calculating Shipping Cost (orders under ₹5000 will have shipping charge of ₹200)
  state.shippingPrice = addDecimals(state.itemsPrice > 5000 ? 0 : 200);

  //Calculating Total Cost
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.taxPrice) +
    Number(state.shippingPrice)
  ).toFixed(2);

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
