import React from "react";
import { Link } from "react-router-dom";
import slugify from "slugify";
import "./Locations.css";

function Locations({ closeNav, locations, locationsShort, weights }) {
  return (
    <div id="sidenav" className="sidenav">
      <a href="true" className="closebtn" onClick={e => closeNav(e)}>
        &times;
      </a>
      <ul>
        {locations.map((location, index) => {
          return (
            <li key={index}>
              <Link
                className={`location-${weights[index]}`}
                to={`/${slugify(location, {
                  replacement: "-",
                  remove: null,
                  lower: true
                })}`}
              >
                {locationsShort[index]}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Locations;
