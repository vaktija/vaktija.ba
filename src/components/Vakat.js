import React from "react";
import "./Vakat.css";

function Vakat({ vakatName, vakatTime, highlight, theme }) {
  return (
    <>
      <h2 className={`name name-${theme}`}>{vakatName}</h2>
      <p className={`time time-${theme}${highlight ? " time-highlight" : ""}`}>
        {vakatTime}
      </p>
    </>
  );
}

export default Vakat;
