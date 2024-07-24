import { Col, Nav, Navbar, Row, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FabricProducts from "./components/FabricProducts";
import ProductDetails from "./components/ProductDetails";
import products from "./data/products";

export default function App() {
  return (
    <div>
      <Section1 />
      <SectionFeature />
      <SectionCarousel />
      <SectionProducts />
      {/* <div className="container-fluid">
        <Router>
          <Routes>
            <Route path="/" element={<FabricProducts products={products} />} />
            <Route
              path="/product/:id"
              element={<ProductDetails products={products} />}
            />
          </Routes>
        </Router>
      </div> */}

      <SectionSample />
    </div>
  );
}

function SectionProducts() {
  return (
    <section className="container-fluid">
      <Router>
        <Routes>
          <Route path="/" element={<FabricProducts products={products} />} />
          <Route
            path="/product/:id"
            element={<ProductDetails products={products} />}
          />
        </Routes>
      </Router>
    </section>
  );
}

function Section1() {
  return (
    <section id="title" className="container-fluid">
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
            <Nav.Link active href="#home">
              Home
            </Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#sample">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

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
            <i class="fa-solid fa-phone"></i>
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
          <i class="fa-solid fa-splotch fa-5x"></i>
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
        <i class="fa-solid fa-phone"></i>
        Contact Us
      </Button>
    </section>
  );
}
