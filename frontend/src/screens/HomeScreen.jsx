import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Product from "../components/Product";
import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useGetProductsQuery } from "../slices/productsApiSlice";

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  return (
    <>
      {isLoading ? (
        <div className="m-4">
          <Loader />
        </div>
      ) : error ? (
        <div className="m-4">
          <Message variant="danger">
            {error?.data?.message || error.error}
          </Message>
        </div>
      ) : (
        <>
          <HeroSection />
          <Container className="mt-5">
            <h1 className="text-center">{`>>>> Featured Collections <<<<`}</h1>
            <Row>
              {products.slice(0, 8).map((product) => (
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
              <Link to="/about">
                <Button variant="outline-warning">Know More</Button>
              </Link>
            </div>
          </section>
          <Container>
            <h1 className="text-center mt-5">{`>>>> Newest Arrival <<<<`}</h1>
            <Row>
              {products
                .slice(-8)
                .reverse()
                .map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default HomeScreen;
