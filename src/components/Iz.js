import React from "react";
import LogoIzLight from "../icons/LogoIzLight.js";
// import LogoIzDark from "../icons/LogoIzDark.js";
import LogoIzDarkColor from "../icons/LogoIzDarkColor.js";

function Iz({ theme }) {
    return (
        <a
            aria-label="Islamska Zajednica"
            target="_blank"
            rel="noopener noreferrer"
            href="https://islamskazajednica.ba"
        >
            {theme === "dark" ? (
                <LogoIzLight
                    height="48"
                />

            ) : (
                    // <LogoIzDark
                    <LogoIzDarkColor
                        height="48"
                    />
                )}
        </a>
    );
}

export default Iz;
