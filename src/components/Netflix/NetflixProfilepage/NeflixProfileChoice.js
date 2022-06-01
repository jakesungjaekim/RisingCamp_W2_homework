import React from "react";
import { Fragment } from "react";

import classes from "./NetflixProfileChoice.module.css";

import InsideMain from "../../pages/InsideMain";
import { Link } from "react-router-dom";

const NetflixProfileChoice = (props) => {
  return (
    <Fragment>
      <div className={classes["choice-wrap"]}>
        <Link to="/inside">
          <img src={props.image} />
        </Link>
        <p>{props.user}</p>
      </div>
    </Fragment>
  );
};

export default NetflixProfileChoice;
