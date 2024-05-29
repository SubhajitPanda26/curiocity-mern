import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";

const CheckoutButton = () => {
  const checkoutHandler = async () => {
    axios
      .post("/api/stripe/create-checkout-session", {
        userInfo,
        cart,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  const { userInfo } = useSelector((state) => state.auth);

  const cart = useSelector((state) => state.cart);
  const { cartItems, taxPrice, shippingPrice, totalPrice } = cart;

  return (
    <>
      <Button
        style={{
          width: "8rem",
          borderRadius: "45px",
          backgroundColor: "#3A3A3A",
        }}
        className="btn-dark"
        type="button"
        disabled={cartItems.length === 0}
        onClick={() => checkoutHandler()}
      >
        Checkout
      </Button>
    </>
  );
};

export default CheckoutButton;
