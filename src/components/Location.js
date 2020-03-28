import React from "react";
import { locations } from "../data/vaktija.json";
import styles from "./Location.module.css";

function Location({ theme, location }) {
  return (
    <h1 className={[styles.location, styles[theme]].join(" ")}>
      {locations[location]}
    </h1>
  );
}

export default Location;
