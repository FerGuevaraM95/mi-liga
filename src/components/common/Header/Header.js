import React, { Component } from "react";

import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

import "./Header.css";

class Header extends Component {
  render() {
    return <div className="app-bar">
        <AppBar position="static">
          <Toolbar>
            <div className="logo" />
            <Typography variant="title" color="inherit" className="flex" />

            <Button color="inherit">
              <a href="/liga">Equipos</a>
            </Button>
            <Button color="inherit">
              <a href="/calendario">Calendarios</a>
            </Button>
          </Toolbar>
        </AppBar>
      </div>;
  }
}

export default Header;
