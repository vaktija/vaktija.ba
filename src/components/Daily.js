import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Glyphicon } from "react-bootstrap";
import moment from "moment";
import momentHijri from "moment-hijri";
import 'moment-timezone';
import "moment-duration-format";
import "moment/locale/bs";
// import ReactGA from "react-ga";
import Cookies from 'universal-cookie';
import slugify from "slugify";
import ReactNotifications from 'react-browser-notifications';
import uuidv4 from "uuid/v4";
import Helmet from "react-helmet";
import { locations, locationsDative, vakatNames } from '../data/vaktija.json';
import { daily } from "../api/vaktija/index.mjs";
import LogoDark from '../img/logo-dark.svg';
import IconDark from '../img/icon-dark.svg';
import LogoLight from '../img/logo-light.svg';
import IconLight from '../img/icon-light.svg';
import RelativeTime from './RelativeTime';
import VakatTime from './VakatTime';
import Counter from './Counter';
import CurrentDate from './CurrentDate';
import Location from './Location';
import Stores from './Stores';
import Locations from './Locations';
import Footer from './Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas);

const cookies = new Cookies();
// ReactGA.initialize("UA-9142566-1");

moment.updateLocale("bs", {
    iMonths: [
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
    ],
    weekdaysShort: ["ned", "pon", "uto", "sri", "čet", "pet", "sub"]
});

function Daily({ locationProps = 77, root }) {

    const localization = useCallback(() => {
        if (root && cookies.get("location") !== undefined) {
            return cookies.get("location");
        }
        return locationProps
    }, [locationProps, root]);

    const nextVakat = () => {
        const nextVakatPosition = daily(localization()).vakat.map((v, i) => ({ pos: i, active: moment().tz("Europe/Sarajevo").isSameOrBefore(moment(v, 'HH:mm').tz("Europe/Sarajevo")) }))

        if (nextVakatPosition.filter(n => n.active === true).length) {
            return nextVakatPosition.filter(n => n.active === true)[0].pos
        } else {
            return 6
        }
    }

    const [n, setN] = useState();
    const [currentMoment, setCurrentMoment] = useState(moment().tz("Europe/Sarajevo"));
    const [locationState] = useState(localization());
    const [vaktija, setVaktija] = useState(daily(localization()).vakat);
    const [nextVakatPosition, setNextVakatPosition] = useState(nextVakat());
    const [theme, setTheme] = useState(moment().isBetween(moment(daily(localization()).vakat[1], "HH:mm"), moment(daily(localization()).vakat[4], "HH:mm")) ? 'light' : 'dark');
    const [date, setDate] = useState([moment().tz("Europe/Sarajevo").format('ddd, D. MMMM'), moment().tz("Europe/Sarajevo").format('YYYY'), momentHijri().tz("Europe/Sarajevo").format("iD. iMMMM iYYYY").toLowerCase()]);
    const showNotifications = useCallback(() => {
        if (n.supported()) n.show();
    }, [n]);

    const [automaticTheme, setAutomaticTheme] = useState(true);

    const tick = useCallback(() => {
        const clock = moment().tz("Europe/Sarajevo").format();
        const notifs = vaktija.map((v, i) => moment(v, "HH:mm").tz("Europe/Sarajevo").subtract(15, "m").format());
        const nextVakatPosition = daily(localization()).vakat.map((v, i) => ({ pos: i, active: moment().tz("Europe/Sarajevo").isSameOrBefore(moment(v, 'HH:mm').tz("Europe/Sarajevo")) }))

        setCurrentMoment(moment().tz("Europe/Sarajevo"));
        setVaktija(daily(localization()).vakat);
        setDate([
            moment().tz("Europe/Sarajevo").format('ddd, D. MMMM'),
            moment().tz("Europe/Sarajevo").format('YYYY'),
            momentHijri().tz("Europe/Sarajevo").format("iD. iMMMM iYYYY").toLowerCase()
        ])

        if (notifs.includes(clock)) {
            showNotifications();
        }

        if (nextVakatPosition.filter(n => n.active === true).length) {
            setNextVakatPosition(nextVakatPosition.filter(n => n.active === true)[0].pos);

        } else {
            setNextVakatPosition(6);
        }

        if (automaticTheme) {
            if (moment().isBetween(moment(vaktija[1], "HH:mm"), moment(vaktija[4], "HH:mm"))) {
                setTheme('light');
                document.body.classList.remove('dark');
                document.body.classList.add('light');
            } else {
                setTheme('dark');
                document.body.classList.remove('light');
                document.body.classList.add('dark');
            }
        }
    }, [localization, showNotifications, vaktija, automaticTheme]);

    useEffect(() => {
        const interval = setInterval(() => tick(), 1000);
        return () => clearInterval(interval);
    }, [tick]);

    useEffect(() => {
        if (theme === 'light') {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        } else if (theme === 'dark') {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
        }

        if (!root) {
            cookies.set("location", locationProps, { path: '/', expires: moment().add(1, "y").tz("Europe/Sarajevo").toDate() });
            // cookies.set("location", locationProps, { path: '/', domain: '.vaktija.ba', expires: moment().add(1, "y").tz("Europe/Sarajevo").toDate() });
        }

    }, [locationProps, root, n, currentMoment, locationState, vaktija, nextVakatPosition, theme, date]);

    const handleClick = (event) => {
        window.focus();
        n.close(event.target.tag);
    }

    const openNav = () => {
        document.getElementById("sidenav").style.width = "100%";
    }

    const closeNav = (e) => {
        e.preventDefault()
        document.getElementById("sidenav").style.width = "0";
    }

    const toggleTheme = () => {
        setAutomaticTheme(false);

        if (theme === 'dark') {
            setTheme('light');
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        } else if (theme === 'light') {
            setTheme('dark');
            document.body.classList.remove('light');
            document.body.classList.add('dark');
        }
    }

    return <>
        <Helmet>
            <link
                rel="canonical"
                href={`https://vaktija.ba/${slugify(
                    locations[locationState],
                    {
                        replacement: "-",
                        remove: null,
                        lower: true,
                    },
                )}`}
            />
            <meta
                name="description"
                content={`Vaktija za ${locationsDative[locationState]}, ${date[0]} ${date[1]} / ${date[2]}${
                    vakatNames.map((vakatName, index) => ` ${vakatName} ${vaktija[index]}`)
                    }. Preuzmite oficijelne Android, iOS (iPhone, iPad) i Windows mobilne aplikacije, namaz, salat, džuma, sehur, ramazan, iftar, teravija, takvim, bosna i hercegovina, sandžak`}
            />

            <meta name="theme-color" content={theme === 'light' ? '#ffffff' : '#1e2227'} />

            <title>{`${locations[locationState]} · Vaktija`}</title>
        </Helmet>
        <ReactNotifications
            onRef={ref => (setN(ref))}
            title={`${vakatNames[nextVakatPosition]} je za 15 minuta`}
            body={`${locations[locationState]}, ${date[0]} ${date[1]} / ${date[2]}`}
            icon={"icon.png"}
            tag={uuidv4()}
            interaction="true"
            onClick={event => handleClick(event)}
        />
        <Grid>
            <Row>
                <Col xs={6}>
                    <Link to="/">
                        {
                            theme === 'light' ?
                                <>
                                    <img className="hidden-xs hidden-sm" src={LogoDark} alt="vaktija.ba" height="48"></img>
                                    <img className="hidden-md hidden-lg" src={IconDark} alt="vaktija.ba" height="32"></img>
                                </> :
                                <>
                                    <img className="hidden-xs hidden-sm" src={LogoLight} alt="vaktija.ba" height="48"></img>
                                    <img className="hidden-md hidden-lg" src={IconLight} alt="vaktija.ba" height="32"></img>
                                </>
                        }
                    </Link>
                </Col>
                <Col className="text-right" xs={6}>
                    <Glyphicon glyph="map-marker" onClick={openNav} className={`glyphicon-${theme}`} />
                </Col>
            </Row>
            <Row>
                <Col className="text-center" xs={12} sm={12} md={12} lg={12}>
                    <Counter vakatTime={vaktija[nextVakatPosition]} theme={theme} />
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <Location theme={theme} location={locationState} />
                    <CurrentDate theme={theme} date={date} location={locationState} />
                </Col>
            </Row>
            <Row className="text-center">
                {
                    vakatNames.map((vakatName, index) => <Col key={vaktija[index]} xs={12} sm={12} md={12} lg={2}>
                        <VakatTime theme={theme} vakatName={vakatName} vakatTime={vaktija[index]} highlight={nextVakatPosition === index ? true : false} />
                        <RelativeTime currentMoment={currentMoment} theme={theme} vakatTime={vaktija[index]} />
                    </Col>
                    )
                }
            </Row>
            <Row>
                <Col className="text-center" xs={12} sm={12} md={12} lg={12}>
                    <br />
                    <br />
                    <Stores theme={theme} />
                </Col>
            </Row>
        </Grid>
        <div id="sidenav" className="sidenav">
            <a href="true" className="closebtn" onClick={(e) => closeNav(e)}>&times;</a>
            <Locations />
        </div>
        <br />
        <Footer theme={theme} toggleTheme={toggleTheme} />
    </>
}

export default Daily;