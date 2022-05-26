import { Fragment } from "react";
import Card from "../UI/Card";

import classes from "./NetflixMainItem.module.css";

const NetflixMainItem = (props) => {
  return (
    <Card className={classes.item}>
      <div className={classes.text}>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>

      <img src={props.image} />
    </Card>
  );
};

export default NetflixMainItem;
