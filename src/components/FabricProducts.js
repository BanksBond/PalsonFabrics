import React from "react";
import { useNavigate } from "react-router-dom";
import "./FabricProducts.css";
import { NavBar } from "../App";

const FabricProducts = ({ products, page, onPage }) => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <section id="title">
        <NavBar page={page} onPage={onPage} />
      </section>
      <h1>Products</h1>
      <div className="fabric-products">
        {products.map((product) => (
          <div
            key={product.id}
            className="fabric-product"
            onClick={() => handleProductClick(product.id)}
          >
            <h3>{product.name}</h3>
            <img
              src={product.image}
              alt={product.name}
              className="fabric-image"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default FabricProducts;
