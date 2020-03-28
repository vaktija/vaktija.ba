import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";
import momentHijri from "moment-hijri";
import "moment-timezone";
import "moment-duration-format";
import "moment/locale/bs";
import Cookies from "universal-cookie";
import { daily } from "../api/vaktija/index.mjs";
import { locations, vakatNames } from "../data/vaktija.json";
import "./Mobile.css";

const cookies = new Cookies();
const iMonths = [
  "Muharrem",
  "Safer",
  "Rebi'u-l-evvel",
  "Rebi'u-l-ahir",
  "Džumade-l-ula",
  "Džumade-l-uhra",
  "Redžeb",
  "Ša'ban",
  "Ramazan",
  "Ševval",
  "Zu-l-ka'de",
  "Zu-l-hidždže"
];

const weekdaysShort = ["ned", "pon", "uto", "sri", "čet", "pet", "sub"];
moment.updateLocale("bs", {
  iMonths,
  weekdaysShort
});

function Mobile() {
  const localization = useCallback(() => {
    if (cookies.get("location") !== undefined) {
      return cookies.get("location");
    }
    return 77;
  }, []);

  const [location, setLocation] = useState(localization());
  const [data, setData] = useState(daily(localization()));
  const [date, setDate] = useState([
    moment()
      .tz("Europe/Sarajevo")
      .format("ddd, D. MMMM YYYY"),
    momentHijri()
      .tz("Europe/Sarajevo")
      .format("iD. iMMMM iYYYY")
      .toLowerCase()
  ]);

  const changeLocation = e => {
    setLocation(Number(e.target.value));
    cookies.set("location", Number(e.target.value), {
      path: "/",
      domain: ".vaktija.ba",
      expires: moment()
        .add(1, "y")
        .tz("Europe/Sarajevo")
        .toDate()
    });
  };

  useEffect(() => {
    const interval = setInterval(
      () =>
        setDate([
          moment()
            .tz("Europe/Sarajevo")
            .format("ddd, D. MMMM YYYY"),
          momentHijri()
            .tz("Europe/Sarajevo")
            .format("iD. iMMMM iYYYY")
            .toLowerCase()
        ]),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setData(daily(location));
    cookies.set("location", location, {
      path: "/",
      domain: ".vaktija.ba",
      expires: moment()
        .add(1, "y")
        .tz("Europe/Sarajevo")
        .toDate()
    });
  }, [date, location]);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th className="location" colSpan={2}>
              {locations[location]}
            </th>
          </tr>
          <tr>
            <td colSpan={2}>
              {date[0]} / {date[1]}
            </td>
          </tr>
          {data.vakat.map((v, index) => (
            <tr key={index}>
              <th>{vakatNames[index]}</th>
              <td>{v}</td>
            </tr>
          ))}
          <tr>
            <td className="select" colSpan={2}>
              <select onChange={e => changeLocation(e)} defaultValue={location}>
                {locations.map((l, index) => (
                  <option key={index} value={index}>
                    {l}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td className="link" colSpan={2}>
              <a className="link" href="https://vaktija.ba">
                vaktija.ba
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Mobile;
