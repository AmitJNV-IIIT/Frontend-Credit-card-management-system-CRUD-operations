  import logo from './logo.svg';
  import './App.css';
  import Loginform from './components/LoginForm/Loginform';
  import Header from './components/Header/Header';

  function App() {
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
        <Header/>
        <div><Loginform/></div>
      </>
    );
  }

  export default App;
