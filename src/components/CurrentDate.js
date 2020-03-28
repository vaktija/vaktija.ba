import React from "react";
import { locations } from "../data/vaktija.json";
import styles from "./CurrentDate.module.css";

function CurrentDate({ date, theme, location }) {
  return (
    <p className={[styles["current-date"], styles[theme]].join(" ")}>
      {date[0]}{" "}
      <a
        className={[styles.year, styles[theme]].join(" ")}
        href={`download/pdf/${locations[location]}_${date[1]}.pdf`}
      >
        {date[1]}
      </a>{" "}
      / {date[2]}
    </p>
  );
}

export default CurrentDate;
