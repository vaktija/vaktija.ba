import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactGA from "react-ga";
import "./Stores.css";

function Stores({ theme }) {
  return (
    <div className="text-center">
      <a
        onClick={() =>
          ReactGA.event({
            category: "Store",
            action: "Google Play link clicked",
            label: "Android",
            nonInteraction: true
          })
        }
        aria-label="Official Android App"
        className={`store store-${theme}`}
        target="_blank"
        rel="noopener noreferrer"
        href="https://play.google.com/store/apps/details?id=ba.vaktija.android"
      >
        <FontAwesomeIcon icon={["fab", "android"]} size="3x" />
      </a>
      <a
        onClick={() =>
          ReactGA.event({
            category: "Store",
            action: "Apple Store link clicked",
            label: "iOS",
            nonInteraction: true
          })
        }
        aria-label="Official iOS App"
        className={`store store-${theme}`}
        target="_blank"
        rel="noopener noreferrer"
        href="https://itunes.apple.com/us/app/vaktija.ba/id1095343967?ls=1&mt=8"
      >
        <FontAwesomeIcon icon={["fab", "apple"]} size="3x" />
      </a>
      <a
        onClick={() =>
          ReactGA.event({
            category: "Store",
            action: "Windows Store link clicked",
            label: "Windows",
            nonInteraction: true
          })
        }
        aria-label="Official Windows App"
        className={`store store-${theme}`}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.microsoft.com/en-us/store/apps/vaktijaba/9nblggh5lc4p"
      >
        <FontAwesomeIcon icon={["fab", "windows"]} size="3x" />
      </a>
    </div>
  );
}

export default Stores;
