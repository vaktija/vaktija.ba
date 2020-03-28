import React from "react";
import "./VakatTime.css";

function VakatTime({ vakatName, vakatTime, highlight, theme }) {
  return (
    <h2>
      <small className={`vakat-name-${theme}`}>{vakatName}</small>
      <br />
      <span className={`vakat-time-${theme}${highlight ? " highlight" : ""}`}>
        {vakatTime}
      </span>
    </h2>
  );
}

export default VakatTime;
