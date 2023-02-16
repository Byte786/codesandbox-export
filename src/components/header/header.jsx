import React from "react";

import { AppBar, Typography, Toolbar } from "@material-ui/core";
import "./header.css";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <img src="logo.png" width="50px" height="50px" />
        <Typography>{`Airbus.com`}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
