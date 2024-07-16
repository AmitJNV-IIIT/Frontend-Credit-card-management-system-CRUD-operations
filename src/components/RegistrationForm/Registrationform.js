import { React, useState } from "react";
import "./Registrationform.css";
import { useNavigate, Link } from 'react-router-dom';
import clickSound from '../../click-button.mp3';


const Registrationform = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [personName, setPersonName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    playClickSound();
    console.log("Name", personName);
    console.log("Username", username);
    console.log("Password", password);
    console.log("Phone", phone);
    console.log("Email", email);
    console.log("DOB", dob);
    navigate('/dashboard');
  };

  return (
    <div className="form-wrapper">
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>User Registration</h1>
        <div className="input-box">
          <input type="text"
           placeholder="Name" 
           id="name" 
           value={personName}
           onChange={e => setPersonName(e.target.value)}
            required />
        </div>
        <div className="input-box">
          <input type="text"
           placeholder="Username" 
           id="username" 
           value={username}
           onChange={e => setUsername(e.target.value)}
            required />
        </div>
        <div className="input-box">
          <input type="password" 
          placeholder="Password" 
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required />
        </div>
        <div className="input-box">
          <input type="text"
           placeholder="Phone" 
           id="phone" 
           value={phone}
           onChange={e => setPhone(e.target.value)}
            required />
        </div>
        <div className="input-box">
          <input type="email"
           placeholder="Email" 
           id="email" 
           value={email}
           onChange={e => setEmail(e.target.value)}
            required />
        </div>
        <div className="input-box">
          <input type="text"
           placeholder="DOB (YYYY-MM-DD)" 
           id="DOB" 
           value={dob}
           onChange={e => setDob(e.target.value)}
            required />
        </div>
        <button type="submit">Register</button>
        <div className="register-link">
          <p>
            <Link to="/">Login</Link>
          </p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Registrationform;
