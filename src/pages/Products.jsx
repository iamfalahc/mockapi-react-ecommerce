import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/productCard/ProductCard";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
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

export default Products;
