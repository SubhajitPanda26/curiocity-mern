import { Row, Col, Container } from "react-bootstrap";
import HeaderBanner from "../components/HeaderBanner";

const AboutScreen = () => {
  return (
    <>
      <HeaderBanner text1={`>>>> Know Us <<<<`} text2="Story of Our Journey" />
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <div className="about-hero"></div>
          </Col>
          <Col md={5} className="m-4 ms-5 me-0">
            <h1>Who We Are?</h1>
            <p align="justify">
              In our curio and antiques website, we aim to convey our passion
              for preserving history and unique treasures. With a love for the
              past, our team scours the world to curate a diverse collection of
              timeless artifacts and curiosities. We believe in connecting
              collectors and enthusiasts with the stories behind each piece,
              sharing the magic of the past with the present. Explore our site
              to discover the rich tapestry of history, art, and culture that
              we're dedicated to preserving and sharing with you. Welcome to a
              world of timeless wonders and historical marvels.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutScreen;
