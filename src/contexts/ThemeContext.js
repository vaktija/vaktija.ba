import React, { createContext, useState } from "react";
import Cookies from "universal-cookie";
import moment from "moment";
import "moment-timezone";
import "moment-duration-format";
import "moment/locale/bs";

export const ThemeContext = createContext();

const cookies = new Cookies();

function ThemeContextProvider(props) {
  const [automaticTheme, setAutomaticTheme] = useState(true);
  const [theme, setTheme] = useState("light");

  const initTheme = theme => {
    if (cookies.get("theme") === "dark" || cookies.get("theme") === "light") {
      setTheme(cookies.get("theme"));
      if (cookies.get("theme") === "dark") {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
      } else if (cookies.get("theme") === "light") {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
      }
      setAutomaticTheme(false);
    } else {
      if (theme === "dark") {
        setTheme("dark");
        document.body.classList.remove("light");
        document.body.classList.add("dark");
      } else if (theme === "light") {
        setTheme("light");
        document.body.classList.remove("dark");
        document.body.classList.add("light");
      }
    }
  };

  const toggleTheme = theme => {
    if (theme === "dark") {
      setTheme("dark");
      setAutomaticTheme(false);
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      cookies.set("theme", theme, {
        path: "/",
        domain: ".vaktija.ba",
        expires: moment()
          .add(1, "y")
          .tz("Europe/Sarajevo")
          .toDate()
      });
    } else if (theme === "light") {
      setTheme("light");
      setAutomaticTheme(false);
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      cookies.set("theme", theme, {
        path: "/",
        domain: ".vaktija.ba",
        expires: moment()
          .add(1, "y")
          .tz("Europe/Sarajevo")
          .toDate()
      });
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        automaticTheme,
        setAutomaticTheme,
        toggleTheme,
        initTheme,
        theme
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
