import logo from '../logo.svg';
import '../pages/Loginpage.css';
import Adminform from '../components/AdminForm/Adminform';
import Header from '../components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {React, useEffect} from 'react';

function Adminpage() {
  const notifyAdmin = (message) => toast(message, { position: "top-center", theme: "dark", autoClose: 1500});
  
  useEffect(() => {
    notifyAdmin("Welcome Master 🥷🏻");
  },[]);

  return (
    <>
      <video
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <source src="/assets/4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <audio
        autoPlay
        loop
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -2,
        }}
      >
        <source src="/assets/dark-knight.mp3" type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
      <ToastContainer />
      <Header/>
      <div><Adminform/></div>
    </>
  );
}

export default Adminpage;
