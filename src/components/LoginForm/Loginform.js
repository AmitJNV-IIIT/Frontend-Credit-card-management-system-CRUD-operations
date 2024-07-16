import { React, useState } from "react";
import "./Loginform.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate, Link  } from 'react-router-dom';
import clickSound from '../../click-button.mp3';
import axios from "axios";
import { toast } from "react-toastify";

const Loginform = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username:'',
    password:''
  });
  const [jwtResponse, setJwtResponse] = useState({});
  const [userCred, setUserCred] = useState({});

  function changeHandler(e){
    e.preventDefault();
    setLoginData({
      ...loginData,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault(); 
    playClickSound();
    // console.log("Username", loginData.username);
    // console.log("Password", loginData.password);
    //hit login axios body has username,password,jwt in response
    //hit decrypt axios, inside body will go jwt, response->json object, if cred correct
    //use toast toshow user not found/password mismatch
    //save user json in local storage
    loginToGetJWTResponse(loginData);
    // console.log(jwtResponse);
    
    
  };

  const loginToGetJWTResponse = (data) => {
    axios.post(`http://localhost:8084/api/v1/login`, data).then(
      (response) => {
        console.log(response.data);
        setJwtResponse(response.data);
        getUserCred(response.data);
        // toast.success("Logged in succesfully");
        setLoginData({
          username:'',
          password:''
        });
        // navigate('/view-courses');
        navigate('/dashboard');
      },
      (error) => {
        toast.error("Wrong credentials");
        console.log(error);
      }
    );
  };

  const getUserCred = (data) => {
    axios.post(`http://localhost:8084/api/v1/services/decrypt`, data).then(
      (response) => {
        setUserCred(response.data);
        console.log(response.data);
        localStorage.setItem("userData", JSON.stringify(response.data));
        // toast.success("User set in succesfully");
        // navigate('/view-courses');
      },
      (error) => {
        console.log(error);
        toast.error("Wrong credentials");
      }
    );
  };

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  return (
    <div className="form-wrapper">
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>User Login</h1>
        <div className="input-box">
          <input type="text"
           placeholder="Username" 
           id="username" 
           name="username"
           value={loginData.username}
           onChange={changeHandler}
            required />
          <FaUser className="icon"/>
        </div>
        <div className="input-box">
          <input type="password" 
          placeholder="Password" 
          id="password"
          name="password"
          value={loginData.password}
          onChange={changeHandler}
          required />
          <FaLock className="icon"/>
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Don't hava an account? <Link to="/registeruser">Register</Link>
          </p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Loginform;
