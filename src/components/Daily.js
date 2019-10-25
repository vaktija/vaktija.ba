import React, { useState, useEffect, useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from "react-bootstrap";
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
import LogoDark from '../icons/LogoDark.js';
import IconDark from '../icons/IconDark.js';
import LogoLight from '../icons/LogoLight.js';
import IconLight from '../icons/IconLight.js';
// TODO check svgr/webpack
// import { ReactComponent as LogoDark } from '../img/logo-dark.svg';
// import { ReactComponent as IconDark } from '../img/icon-dark.svg';
// import { ReactComponent as LogoLight } from '../img/logo-light.svg';
// import { ReactComponent as IconLight } from '../img/icon-light.svg';
import RelativeTime from './RelativeTime';
import VakatTime from './VakatTime';
import Counter from './Counter';
import CurrentDate from './CurrentDate';
import Location from './Location';
import Stores from './Stores';
import Locations from './Locations';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../contexts/ThemeContext';

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

    const context = useContext(ThemeContext);
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

    const [notification, setNotification] = useState();
    const [currentMoment, setCurrentMoment] = useState(moment().tz("Europe/Sarajevo"));
    const [locationState] = useState(localization());
    const [vaktija, setVaktija] = useState(daily(localization()).vakat);
    const [nextVakatPosition, setNextVakatPosition] = useState(nextVakat());
    const { toggleTheme, initTheme, automaticTheme, theme } = context;
    const [date, setDate] = useState([moment().tz("Europe/Sarajevo").format('ddd, D. MMMM'), moment().tz("Europe/Sarajevo").format('YYYY'), momentHijri().tz("Europe/Sarajevo").format("iD. iMMMM iYYYY").toLowerCase()]);

    const showNotifications = useCallback(() => {
        if (notification.supported()) notification.show();
    }, [notification]);

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
    }, [localization, showNotifications, vaktija]);

    useEffect(() => {
        const interval = setInterval(() => tick(), 1000);
        return () => clearInterval(interval);
    }, [tick]);

    useEffect(() => {
        if (automaticTheme) {
            if (moment().isBetween(moment(vaktija[1], "HH:mm"), moment(vaktija[4], "HH:mm"))) {
                initTheme('light');
            } else {
                initTheme('dark');
            }
        }
    }, [automaticTheme, initTheme, nextVakatPosition]);

    useEffect(() => {
        if (!root) {
            cookies.set("location", locationProps, { path: '/', expires: moment().add(1, "y").tz("Europe/Sarajevo").toDate() });
            // cookies.set("location", locationProps, { path: '/', domain: '.vaktija.ba', expires: moment().add(1, "y").tz("Europe/Sarajevo").toDate() });
        }
        // ReactGA.pageview(window.location.pathname + window.location.search);
    }, [locationProps, root]);

    const handleClick = (event) => {
        window.focus();
        notification.close(event.target.tag);
    }

    const openNav = () => {
        document.getElementById("sidenav").style.width = "100%";
    }

    const closeNav = (e) => {
        e.preventDefault()
        document.getElementById("sidenav").style.width = "0";
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
            onRef={ref => (setNotification(ref))}
            title={`${vakatNames[nextVakatPosition]} je za 15 minuta`}
            body={`${locations[locationState]}, ${date[0]} ${date[1]} / ${date[2]}`}
            icon={"icon.png"}
            tag={uuidv4()}
            interaction="true"
            onClick={event => handleClick(event)}
        />
        <Grid>
            <Row>
                <Col xs={6} className="text-left">
                    <Link to="/">
                        {
                            theme === 'light' ?
                                <>
                                    <LogoDark style={{ marginTop: 15 }} height="48" width="126.92" className="hidden-xs hidden-sm" alt="vaktija.ba" />
                                    <IconDark style={{ marginTop: 15 }} height="32" width="32" className="hidden-md hidden-lg" alt="vaktija.ba" />
                                </> :
                                <>
                                    <LogoLight style={{ marginTop: 15 }} height="48" width="126.92" className="hidden-xs hidden-sm" alt="vaktija.ba" />
                                    <IconLight style={{ marginTop: 15 }} height="32" width="32" className="hidden-md hidden-lg" alt="vaktija.ba" />
                                </>
                        }
                    </Link>
                </Col>
                <Col className="text-right" xs={6}>
                    <FontAwesomeIcon
                        style={{ marginTop: 15, cursor: "pointer" }}
                        onClick={openNav}
                        icon={['fas', 'map-marker-alt']}
                        size="2x" />
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