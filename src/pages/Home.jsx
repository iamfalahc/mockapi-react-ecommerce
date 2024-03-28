import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../components/categoryCard/CategoryCard";

const Home = () => {
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
        <>
          {data.slice(0, 3).map((product) => (
            <CategoryCard key={product.id} data={product} />
          ))}

          <Link to="/categories">View More Categories</Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
