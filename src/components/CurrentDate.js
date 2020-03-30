import React from "react";
import "./CurrentDate.css";

function CurrentDate({ date, theme, location, locations }) {
  return (
    <p className={`current-date current-date-${theme}`}>
      {date[0]}{" "}
      <a
        className={`year year-${theme}`}
        href={`download/pdf/${locations[location]}_${date[1]}.pdf`}
      >
        {date[1]}
      </a>{" "}
      / {date[2]}
    </p>
  );
}

export default CurrentDate;
