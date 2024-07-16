import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./UserProfileItem.css";

const UserProfileItem = () => {
    const firstName = "Amit";
    const lastName = "kumar";
    const username = "VivDGreat45";
    const phNumber = "1234567890";
    const email = "viv45@dev.com";
    const dob = "24-05-2001";
    const [data, setData] = useState({});
    useEffect(() => {
      const data = localStorage.getItem("userData");
      console.log("inside userProfile: ", JSON.parse(data));
      setData(JSON.parse(data));
    }, []);
  return (
    <div className="profile-item">
      <div className="user-card">
        <div className="user-img" />
        <div className="user-info">
          <div className="username">
          <h2>{data.username}</h2>
          </div>
          <p className="full-name">Fullname: {data.name}</p>
          <div className="lineBreak"></div>
          <p className="contact">Contact: {data.phone}</p>
          <div className="lineBreak"></div>
          <p className="dob">Date of Birth: {data.dob}</p>
          <div className="lineBreak"></div>
          <p className="email">Email Id: {data.email}</p>
        </div>
        <div className="edit-btn">Edit User Info</div>
      </div>
    </div>
  );
};

export default UserProfileItem;
