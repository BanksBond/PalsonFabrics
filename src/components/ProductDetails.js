import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!product) return <div>Product not found</div>;

  const selectColor = (color) => {
    setSelectedColor(color);
    setIsZoomed(false); // Reset zoom on color change
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <div className="fflleexx">
        <div className="colors-list">
          {product.colors.map((colorObj, index) => (
            <div
              key={index}
              className={`color-card ${
                selectedColor === colorObj.name ? "selected" : ""
              }`}
              onClick={() => selectColor(colorObj.name)}
            >
              <img
                src={colorObj.image}
                alt={`Color ${colorObj.color}`}
                className="color-image"
              />
              <h5>{colorObj.name}</h5>
            </div>
          ))}
        </div>
        <div className="selected-color">
          <h3>Selected Variant: {selectedColor}</h3>
          <div
            className={`selected-color-image-container ${
              isZoomed ? "zoomed" : ""
            }`}
            onClick={toggleZoom}
          >
            <img
              src={
                product.colors.find(
                  (colorObj) => colorObj.name === selectedColor
                ).image
              }
              alt={`Selected ${selectedColor}`}
              className="selected-color-image"
            />
            <Button size="lg" variant="outline-dark">
              Download <i className="fa-solid fa-download"></i>
            </Button>
          </div>
        </div>
      </div>
      <div className="specs">
        <h2>Technical Specifications</h2>
        {product.specs.map((obj, specIndex) => (
          <Row key={specIndex}>
            <Col>
              <div>
                <div className="spec">
                  <Row>
                    <Col>
                      <h4>Range </h4>
                    </Col>
                    <Col>
                      <p> {obj.range}</p>
                    </Col>
                  </Row>
                </div>

                <div className="spec">
                  <Row>
                    <Col>
                      <h4>Content </h4>
                    </Col>
                    <Col>
                      <p> {obj.content}</p>
                    </Col>
                  </Row>
                </div>

                <div className="spec">
                  <Row>
                    <Col>
                      <h4>Weight </h4>
                    </Col>
                    <Col>
                      <p> {obj.weight}</p>
                    </Col>
                  </Row>
                </div>

                <div className="spec">
                  <Row>
                    <Col>
                      <h4>Abrasion Resistance </h4>
                    </Col>
                    <Col>
                      <p>{obj.abrasion_resistance}</p>
                    </Col>
                  </Row>
                </div>
                <div className="spec">
                  <Row>
                    <Col>
                      <h4>Color Fastness </h4>
                    </Col>
                    <Col>
                      <p> {obj.colour_fastness}</p>
                    </Col>
                  </Row>
                </div>

                <div className="spec">
                  <Row>
                    <Col>
                      <h4>Suitable For </h4>
                    </Col>
                    <Col>
                      <p> {obj.suitable_for}</p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <div className="spec">
                  <Row>
                    <Col>
                      <h4>Color Matching </h4>
                    </Col>
                    <Col>
                      <p> {obj.colour_matching}</p>
                    </Col>
                  </Row>
                </div>

                <div className="spec">
                  <Row>
                    <Col>
                      <h4>Cleaning </h4>
                    </Col>
                    <Col>
                      <p> {obj.cleaning}</p>
                    </Col>
                  </Row>
                </div>

                <div className="spec">
                  <Row>
                    <Col>
                      <h4>Flamability </h4>
                    </Col>
                    <Col>
                      <p style={{ whiteSpace: "pre-line" }}>
                        {obj.flammability.join("\n")}
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
