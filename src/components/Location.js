import React from "react";
import "./Location.css";

function Location({ theme, location, locations }) {
  return (
    <h1 className={`location location-${theme}`}>{locations[location]}</h1>
  );
}

export default Location;
