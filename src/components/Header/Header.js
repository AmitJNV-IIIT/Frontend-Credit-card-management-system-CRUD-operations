import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./Header.css";
import { useNavigate } from 'react-router-dom';
import clickSound from '../../click-button.mp3';


const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [counter, setCounter] = React.useState(0);
  const navigate = useNavigate();

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const handleMenuClick = (event) => {
    playClickSound();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    playClickSound();
    setAnchorEl(null);
  };

  const handleLogoCounter = () => {
    playClickSound();
    setCounter(counter + 1);
    if (counter === 25) {
      setCounter(26);
      // alert("You've entered Arkham Mode");
      navigate('/arkham');
    }
    if (counter === 50) {
      console.log('c', counter);
      setCounter(1);
      // alert("You've exited Arkham Mode");
      navigate('/');
    }
  };

  return (
    <AppBar position="static" sx={{ background: "black", opacity:0.8 }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 1 }}
          onClick={() => handleLogoCounter()}
        >
          <img src="/assets/arkham-logo.png" alt="logo" style={{ height: "40px" }} />
        </IconButton>
        <div style={{ marginLeft: 'auto' }}>
        <Button color="inherit" onClick={handleMenuClick}>
          User 
        </Button>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            style: {
              background: "black",
              color: "white",
            },
          }}
        >
          <MenuItem onClick={handleMenuClose}>User</MenuItem>
          <MenuItem onClick={handleMenuClose}>Merchant</MenuItem>
        </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
