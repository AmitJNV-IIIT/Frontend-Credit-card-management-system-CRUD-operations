import React from "react";
import "./Adminform.css";
import { FaUser, FaLock } from "react-icons/fa";

const Adminform = () => {
  return (
    <div className="form-wrapper">
    <div className="wrapper">
      <form action="">
        <h1>Arkham Mode</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon"/>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon"/>
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default Adminform;
