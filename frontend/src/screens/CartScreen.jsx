import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  Container,
  Table,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import { addToCart, removeFromCart, emptyCart } from "../slices/cartSlice";

// add comma in the price as thousand separator
const formatPrice = (num) => num.toLocaleString();

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems, taxPrice, shippingPrice, totalPrice } = cart;

  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removerFromCartHandler = async (id) => {
    dispatch(removeFromCart(id));
  };

  const emptyCartHandler = async () => {
    dispatch(emptyCart());
  };

  return (
    <Container className="my-4">
      <Row>
        <h1 className="text-center mb-5">{`>>>> Shopping Cart <<<<`}</h1>
        {cartItems.length === 0 ? (
          <h4 className="text-center my-5">
            Your Cart is Empty!
            <div className="my-3">
              <Link to="/">
                <button
                  style={{ backgroundColor: "#00D26A", color: "#ffffff" }}
                >
                  Continue Shopping ➦
                </button>
              </Link>
            </div>
          </h4>
        ) : (
          <>
            <Col md={7}>
              <Table borderless size="md" className="text-center">
                <thead style={{ borderBottom: "1px solid black" }}>
                  <tr>
                    <th>PRODUCT</th>
                    <th className="text-start">NAME</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>REMOVE</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item._id}>
                      <td>
                        <Image
                          style={{
                            height: "4rem",
                          }}
                          src={item.image}
                          alt={item.name}
                          fluid
                          rounded
                        />
                      </td>
                      <td className="text-start py-4">
                        <Link to={`/product/${item._id}`}>{item.name}</Link>
                      </td>
                      <td className="py-4">₹{formatPrice(item.price)}</td>
                      <td className="py-3">
                        <Form.Control
                          style={{
                            backgroundColor: "#F2F5F5",
                            border: "0.1px solid #36454F",
                          }}
                          as="select"
                          value={item.qty}
                          onChange={(e) =>
                            addToCartHandler(item, Number(e.target.value))
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </td>
                      <td className="py-3">
                        <Button
                          type="button"
                          variant="outline-danger"
                          className="py-2"
                          onClick={() => removerFromCartHandler(item._id)}
                        >
                          <RiDeleteBin5Line></RiDeleteBin5Line>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Row>
                <Col>
                  <Button variant="danger" onClick={() => emptyCartHandler()}>
                    Empty Cart
                  </Button>
                </Col>
                <Col className="text-end">
                  <Link to="/">
                    <button
                      style={{
                        backgroundColor: "#00D26A",
                        color: "#ffffff",
                      }}
                    >
                      Continue Shopping ➦
                    </button>
                  </Link>
                </Col>
              </Row>
            </Col>

            <Col md={1}></Col>
            <Col md={4}>
              <Card className="py-3 px-2 rounded shadow">
                <Card.Header>
                  <h5 className="text-center">ORDER SUMMARY</h5>
                </Card.Header>
                <Card.Body>
                  <Card.Body>
                    <Row>
                      <Col>No. of Items: </Col>
                      <Col>
                        {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                      </Col>
                    </Row>
                    <Row>
                      <Col>Shipping Cost:</Col>
                      <Col>₹{formatPrice(Number(shippingPrice))}</Col>
                    </Row>
                    <Row>
                      <Col>GST Tax: </Col>
                      <Col>₹{formatPrice(Number(taxPrice))}</Col>
                    </Row>
                    <Row>
                      <Col>Sub Total:</Col>
                      <Col>
                        ₹
                        {formatPrice(
                          Number(
                            cartItems
                              .reduce(
                                (acc, item) => acc + item.price * item.qty,
                                0
                              )
                              .toFixed(2)
                          )
                        )}
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <Row>
                      <Col>
                        <h5>Grand Total: </h5>
                      </Col>
                      <Col>
                        <h4 className="fw-bold">
                          ₹{formatPrice(Number(totalPrice))}
                        </h4>
                      </Col>
                    </Row>
                  </Card.Footer>
                  <Card.Text className="py-2">
                    <Button
                      style={{
                        width: "8rem",
                        borderRadius: "45px",
                        backgroundColor: "#3A3A3A",
                      }}
                      className="btn-dark"
                      type="button"
                      disabled={cartItems.length === 0}
                    >
                      Checkout
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default CartScreen;
