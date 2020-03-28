import React from "react";
import styles from "./Vakat.module.css";

function VakatTime({ vakatName, vakatTime, highlight, theme }) {
  return (
    <>
      <h2 className={[styles.name, styles[theme]].join(" ")}>{vakatName}</h2>
      <p
        className={[
          styles.time,
          styles[theme],
          highlight ? styles.highlight : ""
        ].join(" ")}
      >
        {vakatTime}
      </p>
    </>
  );
}

export default VakatTime;
