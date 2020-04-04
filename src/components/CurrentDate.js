import React from "react";
import ReactGA from "react-ga";
import "./CurrentDate.css";

function CurrentDate({ date, theme, location, locations }) {
  return (
    <p className={`current-date current-date-${theme}`}>
      {date[0]}{" "}
      <a
        onClick={() =>
          ReactGA.event({
            category: "Download",
            action: "Yearly PDF file clicked",
            label: `${locations[location]}_${date[1]}.pdf`,
            nonInteraction: true
          })
        }
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
