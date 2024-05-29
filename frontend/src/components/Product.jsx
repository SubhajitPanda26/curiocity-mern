import { Card, Tooltip, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card
      className="my-3 p-3 rounded shadow hover-scale"
      style={{ width: "16rem" }}
    >
      <Link to={`/product/${product._id}`}>
        <Card.Img height="240px" src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <OverlayTrigger
            placement="bottom"
            overlay={(props) => <Tooltip {...props}>{product.name}</Tooltip>}
          >
            <Card.Title as="div" className="product-title">
              <>{product.name}</>
            </Card.Title>
          </OverlayTrigger>

          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text as="div" className="fs-4 fw-bold">
            ₹{product.price.toLocaleString()}
          </Card.Text>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Product;
