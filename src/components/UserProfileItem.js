import React from "react";
import Card from "../Card/Card";
import "./UserProfileItem.css";

const UserProfileItem = () => {
    const firstName = "Vivek";
    const lastName = "Devre";
    const username = "VivDGreat45";
    const phNumber = "1234567890";
    const email = "viv45@dev.com";
    const dob = "24-05-2001";
  return (
    <div className="profile-item">
      <div className="user-card">
        <div className="user-img" />
        <div className="user-info">
          <h2 className="username">{username}</h2>
          <p className="full-name">Fullname: {firstName + " " + lastName}</p>
          <div className="lineBreak"></div>
          <p className="contact">Contact: {phNumber}</p>
          <div className="lineBreak"></div>
          <p className="dob">Date of Birth: {dob}</p>
          <div className="lineBreak"></div>
          <p className="email">Email Id: {email}</p>
        </div>
        <div className="edit-btn">Edit User Info</div>
      </div>
    </div>
  );
};

export default UserProfileItem;
