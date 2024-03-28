import React from "react";
import "./userCard.css";

const UserCard = ({ data }) => {
  return (
    <div className="user-card">
      <img src={data.avatar} alt="" />
      <span>{data.name}</span>
      <span>{data.email}</span>
      <span>{data.role}</span>
      <span>{data.password}</span>
    </div>
  );
};

export default UserCard;
