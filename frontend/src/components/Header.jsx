import { Navbar, Nav, Container } from "react-bootstrap";
import { RiShoppingCartLine, RiUser3Fill } from "react-icons/ri";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo/logo.png";
import "../assets/custom-boot.css";

const Header = () => {
  return (
    <header>
      <Navbar
        variant="dark"
        expand="md"
        collapseOnSelect
        className="custom-nav"
        fixed="top"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="CurioCity" height="60px" width="auto" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/shop">
                <Nav.Link>Shop</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link style={{ color: "blue" }}>
                  <RiShoppingCartLine className="mx-2" />
                  Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <RiUser3Fill className="mx-2" />
                  Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
