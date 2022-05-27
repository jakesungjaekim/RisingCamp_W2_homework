import React from "react";
import { Fragment } from "react";

import classes from "./NetflixProfileChoice.module.css";

const NetflixProfileChoice = (props) => {
  return (
    <Fragment>
      <div className={classes["choice-wrap"]}>
        <img src={props.image} />
        <p>{props.user}</p>
      </div>
    </Fragment>
  );
};

export default NetflixProfileChoice;
