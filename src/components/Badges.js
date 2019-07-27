import React, { Component, Fragment } from 'react';
import Google from "../img/google-badge.png";
import Apple from "../img/apple-badge.svg";
import Microsoft from "../img/microsoft-badge.png";

class Badges extends Component {
    render() {
        return (
            <Fragment>
                <a target="_blank"
                    rel="noopener noreferrer"
                    href="https://play.google.com/store/apps/details?id=ba.vaktija.android">
                    <img className="img-rounded" alt="Google" src={Google} height={44} />
                </a>
                <a target="_blank"
                    rel="noopener noreferrer"
                    href="https://itunes.apple.com/us/app/vaktija.ba/id1095343967?ls=1&amp;mt=8">
                    <img className="img-rounded" alt="Apple" src={Apple} height={44} />
                </a>
                <a target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.microsoft.com/en-us/store/apps/vaktijaba/9nblggh5lc4p">
                    <img className="img-rounded" alt="Microsoft" src={Microsoft} height={44} />
                </a>
            </Fragment>
        );
    }
}

export default Badges;