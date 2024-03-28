import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./pages.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/products/${id}`
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
        <div className="detail-page">
          <img src={data.images[0]} alt="" />
          <div className="right-section">
            <span>{data.title}</span>
            <span>{data.price}</span>
            <span>{data.description}</span>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
