import React from "react";
import "./productCard.css";
import { Navigate, useNavigate } from "react-router-dom";

const ProductCard = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate({ pathname: `/products/${data.id}` });
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={data.images[1]} alt="" />
      <span>{data.title}</span>
      <span>{data.price}</span>
      <button>ADD TO CART</button>
    </div>
  );
};

export default ProductCard;
