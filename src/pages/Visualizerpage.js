import logo from "../logo.svg";
import "../pages/Loginpage.css";
import Reportheader from "../components/ReportHeader/Reportheader";
import Visualization from "../components/Visualization/Visualization";

import backgroundImage from "../report-bg.png";
import Userheader from "../components/UserHeader/Userheader";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

function Visualizer() {
  const containerStyle = {
    // backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 1)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
  };

  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "black",
        },
      },
      fpsLimit: 260,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 2,
          },
          repulse: {
            distance: 150,
            duration: 0.2,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 8,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 480,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
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
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <Userheader />
        {/* <div><Loginform/></div> */}
        <div style={containerStyle}>
          <h2 style={{ textAlign: "center", color: "white" }}>User Report</h2>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <Visualization />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* <Reportheader /> */}
      <Userheader />
      <div style={containerStyle}>
        <h2 style={{ textAlign: "center", color: "white" }}>User Report</h2>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <Visualization />
        </div>
      </div>
    </>
  );
}

export default Visualizer;
