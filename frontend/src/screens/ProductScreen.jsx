import { useState } from "react";
import { useParams } from "react-router-dom";
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
  Modal,
} from "react-bootstrap";
import {
  RiArrowGoBackLine,
  RiShoppingCartLine,
  RiAccountCircleFill,
} from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {
  useGetProductDetailsQuery,
  useCreateReviewMutation,
} from "../slices/productsApiSlice";
import { addToCart } from "../slices/cartSlice";

const ProductScreen = () => {
  const { id: productId } = useParams();

  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId);

  const [createReview, { isLoading: loadingProductReview }] =
    useCreateReviewMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    toast.success("Product is added to the cart", {
      autoClose: 1000,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await createReview({
        productId,
        rating,
        comment,
      }).unwrap();
      refetch();
      toast.success("Review Submitted");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  // const slicedReviews = product.reviews.slice(0, 3);
  const slicedReviews =
    product && product.reviews ? product.reviews.slice(0, 3) : [];

  return (
    <Container>
      <Link to="/shop">
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
        <>
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
          <Row className="review my-5">
            <Col md={5}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3
                    className="text-center"
                    style={{ fontFamily: "Sancreek" }}
                  >
                    Write a Customer Review
                  </h3>

                  {loadingProductReview && <Loader />}

                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group className="my-2" controlId="rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as="select"
                          required
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="">Select...</option>
                          <option value="1">1 - Poor</option>
                          <option value="2">2 - Fair</option>
                          <option value="3">3 - Good</option>
                          <option value="4">4 - Very Good</option>
                          <option value="5">5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group className="my-2" controlId="comment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as="textarea"
                          row="3"
                          required
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button
                        style={{
                          borderRadius: "45px",
                          backgroundColor: "#3A3A3A",
                        }}
                        className="btn-dark"
                        disabled={loadingProductReview}
                        type="submit"
                        variant="primary"
                      >
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to="/login">sign in</Link> to write a review
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={1}></Col>
            <Col md={6}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3
                    className="text-center"
                    style={{ fontFamily: "Sancreek" }}
                  >{`>>>> Customer Reviews <<<<`}</h3>
                  {product.reviews.length === 0 && (
                    <Message>
                      No reviews yet!!! Be the first one to write a review
                    </Message>
                  )}
                  {slicedReviews.map((review) => (
                    <Card key={review._id}>
                      <Card.Body>
                        <Card.Title>
                          <RiAccountCircleFill size={28} /> {review.name}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          <Rating value={review.rating} />
                          {`Reviewed at: `}
                          {review.createdAt.substring(0, 10)}
                        </Card.Subtitle>
                        <Card.Text style={{ fontStyle: "italic" }}>
                          {review.comment}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
                  {product.reviews.length > 0 && (
                    <Button
                      style={{
                        borderRadius: "45px",
                        backgroundColor: "#3A3A3A",
                      }}
                      className="btn-dark my-2"
                      type="button"
                      variant="primary"
                      onClick={handleModalShow}
                    >
                      See All Reviews
                    </Button>
                  )}
                  <Modal show={showModal} onHide={handleModalClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>All Reviews</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {product.reviews.map((review) => (
                        <Card key={review._id}>
                          <Card.Body>
                            <Card.Title>
                              <RiAccountCircleFill size={28} /> {review.name}
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                              <Rating value={review.rating} />
                              {`Reviewed at: `}
                              {review.createdAt.substring(0, 10)}
                            </Card.Subtitle>
                            <Card.Text style={{ fontStyle: "italic" }}>
                              {review.comment}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      ))}
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        style={{
                          borderRadius: "45px",
                          backgroundColor: "#3A3A3A",
                        }}
                        className="btn-dark"
                        type="button"
                        variant="secondary"
                        onClick={handleModalClose}
                      >
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default ProductScreen;
