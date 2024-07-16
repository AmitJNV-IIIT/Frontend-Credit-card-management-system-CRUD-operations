import logo from "../logo.svg";
import "../pages/Loginpage.css";
import Loginform from "../components/LoginForm/Loginform";
import Userheader from "../components/UserHeader/Userheader";
import Card from "../components/Card/Card";
import Tagline from "../components/Tagline/Tagline";
import TransactionList from "../components/Transactions/TransactionList";
import './Userhome.css'

function Userhome() {
  return (
    <>
      {/* Full-screen video */}
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <source src="/assets/4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Userheader />
      {/* <div><Loginform/></div> */}
      <div className="homepage">
        <div className="left-content">
          <Card />
          <Tagline />
        </div>
        <div className="right-content">
          <TransactionList />
        </div>
      </div>
    </>
  );
}

export default Userhome;
