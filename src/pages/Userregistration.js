import logo from '../logo.svg';
import '../pages/Registrationpage.css';
import Loginform from '../components/LoginForm/Loginform';
import Header from '../components/Header/Header';
import Registrationform from '../components/RegistrationForm/Registrationform';

function UserRegistration() {
  return (
    <>
      {/* Full-screen video */}
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
        <source src="/assets/1.mp4" type="video/mp4" />
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
        <source src='/assets/cornfield.mp3' type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
      <Header/>
      <div><Registrationform/></div>
    </>
  );
}

export default UserRegistration;
