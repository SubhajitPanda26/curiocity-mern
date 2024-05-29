import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Row, Col, Form, FormGroup, Button } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { RiSearch2Line } from "react-icons/ri";
import { useGetProductsQuery } from "../slices/productsApiSlice";

const ShopScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [priceFilter, setPriceFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [noProductsFound, setNoProductsFound] = useState(false);

  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
      const uniqueCategories = [
        ...new Set(products.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);
    }
  }, [products]);

  // Function to handle search
  const handleSearch = () => {
    let filtered = [...products];

    // Apply search query filter
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    // Apply category filters
    if (categoryFilters.length > 0) {
      filtered = filtered.filter((product) =>
        categoryFilters.includes(product.category.toLowerCase())
      );
    }
    // Apply price filter
    if (priceFilter) {
      // const [sortBy, order] = priceFilter.split("-");
      filtered.sort((a, b) => {
        if (priceFilter === "low") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    }

    setFilteredProducts(filtered);
    setNoProductsFound(filtered.length === 0);
  };

  // Effect to update filtered products when any filter changes
  useEffect(() => {
    if (products) {
      handleSearch();
    }
  }, [searchQuery, categoryFilters, priceFilter, products]);

  // Function to handle input change for search query
  const handleSearchQueryChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  // Function to handle checkbox change for category filters
  const handleCategoryFilterChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCategoryFilters((prevFilters) => [...prevFilters, value]);
    } else {
      setCategoryFilters((prevFilters) =>
        prevFilters.filter((filter) => filter !== value)
      );
    }
  };

  // Function to handle radio button change for price filter
  const handlePriceFilterChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setPriceFilter(value);
  };

  // Function to handle Reset all filter
  const handleResetFilters = () => {
    setSearchQuery("");
    setCategoryFilters([]);
    setPriceFilter("");
  };

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
          <Container className="mt-5">
            {/* Search Input */}
            <div className="text-end">
              <label htmlFor="search" className="flex mx-2">
                <RiSearch2Line />
              </label>
              <input
                style={{
                  outline: "none",
                  border: "none",
                  borderBottom: "1px solid #ccc",
                  fontStyle: "italic",
                }}
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchQueryChange}
              />
            </div>
            <Row>
              <Col md={2}>
                <Form>
                  <Row>
                    {/* Category Filter */}
                    <FormGroup>
                      <br />
                      <h5 style={{ color: "grey", marginBottom: "15px" }}>
                        Filter by :
                      </h5>
                      <Form.Label>
                        <h5>
                          ◈ <b>Category</b> ◈
                        </h5>
                      </Form.Label>
                      {categories.map((category) => (
                        <Form.Check
                          key={category}
                          type="checkbox"
                          label={category}
                          value={category.toLowerCase()}
                          checked={categoryFilters.includes(
                            category.toLowerCase()
                          )}
                          onChange={handleCategoryFilterChange}
                        />
                      ))}
                    </FormGroup>
                    {/* Price Filter */}
                    <FormGroup>
                      <br />
                      <Form.Label>
                        <h5>
                          ◈ <b>Price</b> ◈
                        </h5>
                      </Form.Label>
                      <div>
                        <Form.Check
                          type="radio"
                          label="Low to High"
                          value="low"
                          checked={priceFilter === "low"}
                          onChange={handlePriceFilterChange}
                        />
                        <Form.Check
                          type="radio"
                          label="High to Low"
                          value="high"
                          checked={priceFilter === "high"}
                          onChange={handlePriceFilterChange}
                        />
                      </div>
                    </FormGroup>
                    <Form.Group className="text-start my-3">
                      <Button
                        style={{
                          width: "10rem",
                          borderRadius: "45px",
                          backgroundColor: "#3A3A3A",
                        }}
                        className="btn-dark"
                        type="button"
                        onClick={handleResetFilters}
                      >
                        Reset Filters
                      </Button>
                    </Form.Group>
                  </Row>
                </Form>
              </Col>
              <Col md={10}>
                {noProductsFound ? (
                  <Row className="my-5 text-center">
                    <h4>
                      <i>No such products available</i>
                    </h4>
                  </Row>
                ) : (
                  <Row>
                    {filteredProducts.length > 0
                      ? filteredProducts.map((product) => (
                          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                          </Col>
                        ))
                      : products.map((product) => (
                          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                          </Col>
                        ))}
                  </Row>
                )}
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default ShopScreen;
