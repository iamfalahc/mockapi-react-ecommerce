import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/userCard/UserCard";

const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/users"
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
        data.map((user) => {
          return <UserCard key={user.id} data={user} />;
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Users;
