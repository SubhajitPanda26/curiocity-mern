import { Row, Col, Container } from "react-bootstrap";
import {
  RiMapPinLine,
  RiMailLine,
  RiPhoneLine,
  RiTimeLine,
} from "react-icons/ri";
import HeaderBanner from "../components/HeaderBanner";

const ContactScreen = () => {
  return (
    <>
      <HeaderBanner
        text1={`>>>> Let's Talk <<<<`}
        text2="We'd Love to Hear From You!"
      />
      <Container className="my-5">
        <Row>
          <Col md={5} className="my-4">
            Get In Touch
            <h1 className="my-3">
              <strong>Visit Our Store Location or Contact Us Today</strong>
            </h1>
            <h5 className="my-4">
              <strong>Head Office</strong>
            </h5>
            <Row>
              <p>
                <RiMapPinLine className="me-3" />
                86B, Churchgate, West Bengal
              </p>
              <p>
                <RiMailLine className="me-3" />
                dummy@gmail.com
              </p>
              <p>
                <RiPhoneLine className="me-3" />
                07823741912
              </p>
              <p>
                <RiTimeLine className="me-3" />
                09.00 - 18.00, Monday - Friday
              </p>
            </Row>
          </Col>
          <Col md={7}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12396.451308472817!2d88.29477328311327!3d22.523421813342335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1698760094129!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactScreen;
