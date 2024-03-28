import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../components/productCard/ProductCard";

const ProductsByCategory = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/categories/${id}/products`
        );
        setData(response.data);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <div className="page">
      {data ? (
        data.map((product) => {
          return <ProductCard key={product.id} data={product} />;
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductsByCategory;
