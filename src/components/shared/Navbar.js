import { AppBar } from "@material-ui/core";
import React from "react";
import { useNavbarStyles } from "../../styles";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

function Navbar() {
  const classes = useNavbarStyles();

  return (
    <AppBar className={classes.appBar}>
      <section className={classes.section}>
        <Logo />
      </section>
    </AppBar>
  );
}

function Logo() {
  const classes = useNavbarStyles();
  return (
    <div className={classes.logoContainer}>
      <Link to="/">
        <div className={classes.logoWrapper}>
          <img src={logo} alt="Logo" />
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
