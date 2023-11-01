import { Button } from "react-bootstrap";

const HeroSection = () => {
  const scrollHandler = () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };

  return (
    <div className="hero">
      <h5>Journey Through Time</h5>
      <h1>Vintage Curios</h1>
      <h1>For Sentimental Souls.</h1>
      <h6> Save more with coupons & up to 40% off! </h6>

      <Button variant="outline-warning" onClick={scrollHandler}>
        Shop Now!
      </Button>
    </div>
  );
};

export default HeroSection;
