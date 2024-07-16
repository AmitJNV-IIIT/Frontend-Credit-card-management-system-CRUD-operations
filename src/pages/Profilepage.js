import logo from '../logo.svg';
import '../pages/Loginpage.css';
import Userheader from '../components/UserHeader/Userheader';

function Profile() {
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
        <source src="/assets/4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Userheader/>
      {/* <div><Loginform/></div> */}
      <div>Profile</div>
    </>
  );
}

export default Profile;
