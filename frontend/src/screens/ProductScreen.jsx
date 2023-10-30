import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Container } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);
  console.log(product);
  return (
    <Container>
      <Link to="/">
        <button className="my-3">Back</button>
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
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
                  ₹ {product.price}{" "}
                </h1>
                <strike> ₹ {3 * product.price}</strike>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>{product.description}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>
                  {" "}
                  Status:{" "}
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}{" "}
                </p>
                <Button
                  className="btn-dark"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductScreen;
