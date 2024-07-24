import React from "react";
import { useNavigate } from "react-router-dom";
import "./FabricProducts.css";

const FabricProducts = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
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
  );
};

export default FabricProducts;
