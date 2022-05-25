import React from "react";
import { Fragment } from "react";

//import img
import netflixImg from "../../assets/header-logo.png";
// import module.css
import classes from "./Header.module.css";
import HeaderLangOption from "./HeaderLangOption";
// import components css
import HeaderLoginButton from "./HeaderLoginButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img
          className={classes["header-image"]}
          src={netflixImg}
          alt="Netflix-logo"
        />
        <div className={classes["header-side"]}>
          <HeaderLangOption />
          <HeaderLoginButton />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;