import React from "react";
import "./categoryCard.css";
import { useNavigate } from "react-router";

const CategoryCard = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate({ pathname: `/categories/${data.id}/products` });
  };

  return (
    <div className="category-card" onClick={handleClick}>
      <img src={data.image} alt="" />
      <span>{data.name}</span>
    </div>
  );
};

export default CategoryCard;
