import React from "react";
import { Fragment } from "react";

import classes from "./NetflixLoginMain.module.css";

import NeflixLoginModal from "./NetflixLoginModal";

const NetflixLoginMain = (props) => {
  return (
    <Fragment>
      <div className={classes.login}>
        <NeflixLoginModal />
      </div>
    </Fragment>
  );
};

export default NetflixLoginMain;
