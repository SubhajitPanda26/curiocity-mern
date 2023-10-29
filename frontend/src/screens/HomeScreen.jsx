import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Product from "../components/Product";
import products from "../products.js";

const HomeScreen = () => {
  return (
    <>
      <Container>
        <h1 className="text-center">{`>>>> Featured Collections <<<<`}</h1>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Container>
      <section>
        <div className="banner my-5">
          <h2>About Our Curio Store</h2>
          <h4>A Fusion of Vintage Charm and Contemporary Style.</h4>
          <Button variant="outline-warning">Know More</Button>
        </div>
      </section>
      <Container>
        <h1 className="text-center mt-5">{`>>>> Newest Arrival <<<<`}</h1>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
