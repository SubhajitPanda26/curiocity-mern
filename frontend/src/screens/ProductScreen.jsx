import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Container,
  Card,
  Form,
} from "react-bootstrap";
import { RiArrowGoBackLine, RiShoppingCartLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import { addToCart } from "../slices/cartSlice";

const ProductScreen = () => {
  const { id: productId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };

  return (
    <Container>
      <Link to="/">
        <button
          className="my-3"
          style={{
            borderRadius: "45px",
          }}
        >
          <RiArrowGoBackLine /> Back
        </button>
      </Link>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Row>
          <Col md={5}>
            <Card className="p-3 rounded shadow">
              <Image src={product.image} alt={product.name} fluid />
            </Card>
          </Col>
          <Col md={1}></Col>
          <Col md={6}>
            <Row>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  <h1 className="fs-2" style={{ display: "inline" }}>
                    ₹ {product.price.toLocaleString()} {""}
                  </h1>
                  <strike> ₹ {3 * product.price}</strike>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p align="justify">{product.description}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    {" "}
                    Status:{" "}
                    {product.countInStock > 0 ? (
                      <span style={{ color: "#00D26A", fontWeight: "bold" }}>
                        In Stock
                      </span>
                    ) : (
                      <span style={{ color: "#F92F60", fontWeight: "bold" }}>
                        Out of Stock
                      </span>
                    )}{" "}
                  </p>
                  <Row>
                    <Col md={7}>
                      <Button
                        style={{
                          borderRadius: "45px",
                          backgroundColor: "#3A3A3A",
                        }}
                        className="btn-dark"
                        type="button"
                        disabled={product.countInStock === 0}
                        onClick={addToCartHandler}
                      >
                        <RiShoppingCartLine /> Add To Cart
                      </Button>
                    </Col>
                    <Col>
                      {product.countInStock > 0 && (
                        <Row>
                          <Col md={4} className="pt-1">
                            Quantity:
                          </Col>
                          <Col md={8}>
                            <Form.Control
                              style={{
                                backgroundColor: "#F2F5F5",
                                border: "0.1px solid #36454F",
                              }}
                              as="select"
                              value={qty}
                              onChange={(e) => setQty(Number(e.target.value))}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </Form.Control>
                          </Col>
                        </Row>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductScreen;
