import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products.js";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      <Row>
        <div className="banner text-center my-3">
          <h1>About Our Curio Store</h1>
          <p>A Fusion of Vintage Charm and Contemporary Style.</p>
          <button>Know More</button>
        </div>
      </Row>
    </>
  );
};

export default HomeScreen;
