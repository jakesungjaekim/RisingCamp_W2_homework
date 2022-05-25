import React from "react";

import classes from "./FooterItem.module.css";

const FooterItem = (props) => {
  return (
    <li>
      <p>{props.name}</p>
    </li>
  );
};

export default FooterItem;
