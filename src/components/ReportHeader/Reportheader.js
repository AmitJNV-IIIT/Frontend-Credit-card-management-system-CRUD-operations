import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./Reportheader.css";
import { useNavigate, useLocation } from 'react-router-dom';


const Userheader = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoutClick = (event) => {
    // setAnchorEl(event.currentTarget);
    navigate('/');
  };

  const handleDashboardClick = (event) => {
    navigate('/dashboard');
  };

  const handleAlertClick = (event) => {
    navigate('/alerts');
  };

  const handleVisualizerClick = (event) => {
    navigate('/visualizer');
  };

  const handleProfileClick = (event) => {
    navigate('/profile');
  };

  return (
    <AppBar position="static" sx={{ background: "black", opacity:1 }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 1 }}
        >
          <img src="/assets/arkham-logo.png" alt="logo" style={{ height: "40px" }} />
        </IconButton>
        <Button className={`header-button ${location.pathname === '/dashboard' ? 'active' : ''}`} color="inherit" onClick={handleDashboardClick}>
          Dashboard 
        </Button>
        <Button className={`header-button ${location.pathname === '/alerts' ? 'active' : ''}`} color="inherit" onClick={handleAlertClick}>
          Alerts 
        </Button>
        <Button className={`header-button ${location.pathname === '/visualizer' ? 'active' : ''}`} color="inherit" onClick={handleVisualizerClick}>
          Visualizer 
        </Button>
        <div style={{ marginLeft: 'auto' }}>
        <Button className={`header-button ${location.pathname === '/profile' ? 'active' : ''}`} color="inherit" onClick={handleProfileClick}>
          Profile 
        </Button>
        <Button className="header-button" color="inherit" onClick={handleLogoutClick}>
          Logout 
        </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Userheader;
