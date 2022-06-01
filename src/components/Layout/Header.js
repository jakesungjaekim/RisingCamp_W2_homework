import React from "react";
import { Fragment } from "react";

//import img
import netflixImg from "../../assets/images/header-logo.png";
// import module.css
import classes from "./Header.module.css";
// import components css
import HeaderLangOption from "./HeaderLangOption";
import HeaderLoginButton from "./HeaderLoginButton";

import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Link to="/">
          <img
            className={classes["header-image"]}
            src={netflixImg}
            alt="Netflix-logo"
          />
        </Link>
        <div className={classes["header-side"]}>
          <HeaderLangOption />
          <HeaderLoginButton />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
