import React from "react";
import { Fragment } from "react";

import classes from "./HeaderLoginButton.module.css";
import { Link } from "react-router-dom";

const HeaderLoginButton = (props) => {
  return (
    <Fragment>
      <Link to="/login">
        <button className={classes.button}>로그인</button>
      </Link>
    </Fragment>
  );
};

export default HeaderLoginButton;
