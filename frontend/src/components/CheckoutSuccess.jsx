import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import { emptyCart } from "../slices/cartSlice";

const CheckoutSuccess = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(emptyCart());
  }, [dispatch]);

  return (
    <Container className="text-center mb-5 my-5">
      <h2 style={{ color: "#00D26A", fontWeight: "bold", fontStyle: "italic" }}>
        Congratulations! 🎉 Your order is confirmed!
      </h2>
      <p>Your order might take some time to process.</p>
      <p>
        We will send you a confirmation email shortly to your email address with
        more details about your order.
      </p>
      <p>
        Incase of any inqueries contact the support at{" "}
        <strong>support@curiocity.com</strong>
      </p>
    </Container>
  );
};

export default CheckoutSuccess;
