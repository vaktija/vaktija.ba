import React from "react";
import { locations } from "../data/vaktija.json";
import "./CurrentDate.css";

function CurrentDate({ date, theme, location }) {
  return (
    <p className="text-center">
      <i className={`date-${theme}`}>
        {date[0]}{" "}
        <a
          className={`year-${theme}`}
          href={`download/pdf/${locations[location]}_${date[1]}.pdf`}
        >
          {date[1]}
        </a>{" "}
        / {date[2]}
      </i>
    </p>
  );
}

export default CurrentDate;
