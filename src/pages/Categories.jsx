import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryCard from "../components/categoryCard/CategoryCard";

const Categories = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/categories"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="page">
      {data ? (
        data.slice(0, 5).map((product) => {
          return <CategoryCard key={product.id} data={product} />;
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Categories;
