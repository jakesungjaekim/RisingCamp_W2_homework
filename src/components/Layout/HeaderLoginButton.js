import React from "react";
import { Fragment } from "react";

import classes from "./HeaderLoginButton.module.css";

const HeaderLoginButton = (props) => {
  return (
    <Fragment>
      <button className={classes.button}>로그인</button>
    </Fragment>
  );
};

export default HeaderLoginButton;
