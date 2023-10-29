import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiDiscordFill,
  RiYoutubeFill,
} from "react-icons/ri";
import pay from "../assets/footer/pay.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <section className="newsletter my-4 px-5">
        <div className="newstext">
          <h4>Sign Up for Newsletters</h4>
          <p>Join Our Mailing List to Stay in the Loop for Everything Curio!</p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your Email Address" />
          <button>Subscribe</button>
        </div>
      </section>

      <Container>
        <Row>
          <Col sm={12} md={6} lg={4} xl={4} className="my-1">
            <h4 className="fw-bold">Contact</h4>
            <div>
              <strong>Address:</strong> 86B, Churchgate, West Bengal
            </div>
            <div>
              <strong>Phone:</strong> 07823741912
            </div>
            <div>
              <strong>Hours:</strong> 09.00 - 18.00, Monday - Friday
            </div>
            <div className="follow my-2">
              <h4 className="fw-bold">Follow Us</h4>
              <Link to="/">
                <RiFacebookCircleFill />
              </Link>{" "}
              <Link to="/">
                <RiInstagramLine />
              </Link>{" "}
              <Link to="/">
                <RiDiscordFill />
              </Link>{" "}
              <Link to="/">
                <RiYoutubeFill />
              </Link>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} xl={2} className="my-1">
            <h4 className="fw-bold">About</h4>
            <div>
              <Link to="/">About Us</Link>
            </div>
            <div>
              <Link to="/">Privacy Policy</Link>
            </div>
            <div>
              <Link to="/">Terms & Conditions</Link>
            </div>
            <div>
              <Link to="/">Contact Us</Link>
            </div>
            <div>
              <Link to="/">Help</Link>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} xl={2} className="my-1">
            <h4 className="fw-bold">My Account</h4>
            <div>
              <Link to="/">Sign In</Link>
            </div>
            <div>
              <Link to="/">View Cart</Link>
            </div>
            <div>
              <Link to="/">My Wishlist</Link>
            </div>
            <div>
              <Link to="/">Track My Order</Link>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4} xl={4} className="my-1">
            <h4 className="fw-bold">Secured Payment Gateways</h4>
            <img src={pay} alt="payment" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <p>Copyright &copy; {year} CurioCity</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
