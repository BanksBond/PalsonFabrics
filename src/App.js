import { Col, Nav, Navbar, Row, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FabricProducts from "./components/FabricProducts";
import ProductDetails from "./components/ProductDetails";
import products from "./data/products";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  function handleSelectPage(p) {
    setPage(p);
  }

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Home page={page} onPage={handleSelectPage} />}
      />
      <Route
        path="/products"
        element={
          <section id="products" className="container-fluid">
            <FabricProducts
              products={products}
              page={page}
              onPage={handleSelectPage}
            />
          </section>
        }
      />
      <Route
        path="/product/:id"
        element={
          <section id="product-details" className="container-fluid">
            <ProductDetails products={products} />
          </section>
        }
      />
    </Routes>
  );
}

function Home({ page, onPage }) {
  return (
    <div>
      <Section1 page={page} onPage={onPage} />
      <SectionFeature />
      <SectionCarousel />
      <SectionSample />
      <Footer />
    </div>
  );
}

function Section1({ page, onPage }) {
  return (
    <section id="title" className="container-fluid">
      <NavBar page={page} onPage={onPage} />

      <Row>
        <Col lg={"6"}>
          <h1>
            Discover Elegance and Durability with our Top-Quality Textiles
          </h1>
          <Button className="download-button" variant="dark" size="lg">
            <i className="fa-solid fa-envelope"></i>
            Contact Us
          </Button>
          <Button className="download-button" variant="outline-light" size="lg">
            <i className="fa-solid fa-phone"></i>
            Contact Us
          </Button>
        </Col>
        <Col lg={"6"}>
          <img
            className="image"
            width={"100%"}
            src="https://cdn.shopify.com/s/files/1/2498/9730/files/IMG_0426_1024x1024.jpg?v=1529936816"
            alt="img"
          ></img>
        </Col>
      </Row>
    </section>
  );
}

export function NavBar({ page, onPage }) {
  return (
    <Navbar
      expand={"lg"}
      className=" mb-3"
      bg="transparent"
      data-bs-theme="dark"
    >
      <Navbar.Brand className="fs-1" href="#">
        Palson Fabrics
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end flex-grow-1 pe-3 fs-5">
          <Link
            to="/"
            className={`${page === "home" ? "active" : ""} nav-link`}
            onClick={() => onPage("home")}
          >
            Home
          </Link>
          {/* <Nav.Link active href="/">
            Home
          </Nav.Link> */}
          {/* <Nav.Link href="/products">Products</Nav.Link> */}
          <Link
            onClick={() => onPage("products")}
            to="/products"
            className={`${page === "products" ? "active" : ""} nav-link`}
          >
            Products
          </Link>
          <a href="#sample" className="nav-link">
            Contacts
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function SectionFeature() {
  return (
    <section id="features" className="container-fluid">
      <div className="feats">
        <div className="feat anim">
          <i className="fa-solid fa-fire fa-5x"></i>
          <h3>Fire Retardant (FR)</h3>
          <p>
            Ignitable property of a fabric can be considerably reduced by
            chemical treatment. FR treatment is available on all kind of
            fabrics.
          </p>
        </div>
        <div className="feat anim">
          <i className="fa-solid fa-splotch fa-5x"></i>
          <h3>Scotchguard (SG)</h3>
          <p>
            Scotchguard treatment helps to block stains like ketchup, tea,
            coffee, juice, ink and hand prints etc. without changing the look
            and feel of the fabric.
          </p>
        </div>
        <div className="feat anim">
          <i className="fa-solid fa-water fa-5x"></i>
          <h3>Water Repellent (WR)</h3>
          <p>
            Water Repellent is a coating added to fabrics to make them water
            resistant. It is available in every range.
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionCarousel() {
  return (
    <section id="carousel" className="">
      <Carousel>
        <Carousel.Item>
          <img
            src="https://wallpaperset.com/w/full/c/9/0/522708.jpg"
            alt="popo"
          ></img>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://wallpaperset.com/w/full/c/9/0/522708.jpg"
            alt="popo"
          ></img>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://wallpaperset.com/w/full/c/9/0/522708.jpg"
            alt="popo"
          ></img>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

function SectionSample() {
  return (
    <section id="sample" className="container-fluid">
      <h2 className="anim">Get a free sample from us now!</h2>
      <h4 className="anim">
        Contact us at{" "}
        <a style={{ color: "white" }} href="mailto:info@palsonfabrics.com">
          info@palsonfabrics.com
        </a>
      </h4>
      <Button className="download-button anim" variant="dark" size="lg">
        <i className="fa-solid fa-envelope"></i>
        Contact Us
      </Button>
      <Button
        className="download-button anim"
        variant="outline-light"
        size="lg"
      >
        <i className="fa-solid fa-phone"></i>
        Contact Us
      </Button>
    </section>
  );
}

function Footer() {
  const googleMapsUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.746607847802!2d77.38235679616874!3d28.66730487648667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf073fa88b4c1%3A0xc7bbc3c5544a51f3!2sGardenia%20Glamour%20Phase%201!5e0!3m2!1sen!2sin!4v1722064484783!5m2!1sen!2sin";
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <p>&copy; 2024 Your Company Name</p>
          <p>123 Your Street, Your City, Your Country</p>
        </div>
        <div className="footer-map">
          <iframe
            src={googleMapsUrl}
            width="600"
            height="450"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
