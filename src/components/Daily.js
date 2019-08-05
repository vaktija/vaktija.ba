import React, { Component, Fragment } from 'react';
import { Grid, Row, Col, Glyphicon } from "react-bootstrap";
import moment from "moment-hijri";
import 'moment-timezone';
import "moment-duration-format";
import "moment/locale/bs";
import { dnevna } from "../api/vaktija/index.mjs";
import Helmet from "react-helmet";
import RelativeTime from './RelativeTime';
import VakatTime from './VakatTime';
import CurrentDate from './CurrentDate';
import Location from './Location';
import Stores from './Stores';
import Locations from './Locations';
import { weight } from '../data/vaktija.json';
import Logo from '../img/logo.svg';
import Icon from '../img/icon.svg';
import { Link } from 'react-router-dom';
import ReactGA from "react-ga";
import Cookies from 'universal-cookie';
import slugify from "slugify";

const cookies = new Cookies();

const myLocations = ["Banovići", "Banja Luka", "Bihać", "Bijeljina", "Bileća", "Bosanski Brod", "Bosanska Dubica", "Bosanska Gradiška", "Bosansko Grahovo", "Bosanska Krupa", "Bosanski Novi", "Bosanski Petrovac", "Bosanski Šamac", "Bratunac", "Brčko", "Breza", "Bugojno", "Busovača", "Bužim", "Cazin", "Čajniče", "Čapljina", "Čelić", "Čelinac", "Čitluk", "Derventa", "Doboj", "Donji Vakuf", "Drvar", "Foča", "Fojnica", "Gacko", "Glamoč", "Goražde", "Gornji Vakuf", "Gračanica", "Gradačac", "Grude", "Hadžići", "Han-Pijesak", "Hlivno", "Ilijaš", "Jablanica", "Jajce", "Kakanj", "Kalesija", "Kalinovik", "Kiseljak", "Kladanj", "Ključ", "Konjic", "Kotor-Varoš", "Kreševo", "Kupres", "Laktaši", "Lopare", "Lukavac", "Ljubinje", "Ljubuški", "Maglaj", "Modriča", "Mostar", "Mrkonjić-Grad", "Neum", "Nevesinje", "Novi Travnik", "Odžak", "Olovo", "Orašje", "Pale", "Posušje", "Prijedor", "Prnjavor", "Prozor", "Rogatica", "Rudo", "Sanski Most", "Sarajevo", "Skender-Vakuf", "Sokolac", "Srbac", "Srebrenica", "Srebrenik", "Stolac", "Šekovići", "Šipovo", "Široki Brijeg", "Teslić", "Tešanj", "Tomislav-Grad", "Travnik", "Trebinje", "Trnovo", "Tuzla", "Ugljevik", "Vareš", "Velika Kladuša", "Visoko", "Višegrad", "Vitez", "Vlasenica", "Zavidovići", "Zenica", "Zvornik", "Žepa", "Žepče", "Živinice", "Bijelo Polje", "Gusinje", "Nova Varoš", "Novi Pazar", "Plav", "Pljevlja", "Priboj", "Prijepolje", "Rožaje", "Sjenica", "Tutin"];
const myLocations2 = ["Banoviće", "Banja Luku", "Bihać", "Bijeljinu", "Bileću", "Bosanski Brod", "Bosansku Dubicu", "Bosansku Gradišku", "Bosansko Grahovo", "Bosansku Krupu", "Bosanski Novi", "Bosanski Petrovac", "Bosanski Šamac", "Bratunac", "Brčko", "Brezu", "Bugojno", "Busovaču", "Bužim", "Cazin", "Čajniče", "Čapljinu", "Čelić", "Čelinac", "Čitluk", "Derventu", "Doboj", "Donji Vakuf", "Drvar", "Foču", "Fojnicu", "Gacko", "Glamoč", "Goražde", "Gornji Vakuf", "Gračanicu", "Gradačac", "Grude", "Hadžiće", "Han-Pijesak", "Hlivno", "Ilijaš", "Jablanicu", "Jajce", "Kakanj", "Kalesiju", "Kalinovik", "Kiseljak", "Kladanj", "Ključ", "Konjic", "Kotor-Varoš", "Kreševo", "Kupres", "Laktaše", "Lopare", "Lukavac", "Ljubinje", "Ljubuški", "Maglaj", "Modriču", "Mostar", "Mrkonjić-Grad", "Neum", "Nevesinje", "Novi Travnik", "Odžak", "Olovo", "Orašje", "Pale", "Posušje", "Prijedor", "Prnjavor", "Prozor", "Rogaticu", "Rudo", "Sanski Most", "Sarajevo", "Skender-Vakuf", "Sokolac", "Srbac", "Srebrenicu", "Srebrenik", "Stolac", "Šekoviće", "Šipovo", "Široki Brijeg", "Teslić", "Tešanj", "Tomislav-Grad", "Travnik", "Trebinje", "Trnovo", "Tuzlu", "Ugljevik", "Vareš", "Veliku Kladušu", "Visoko", "Višegrad", "Vitez", "Vlasenicu", "Zavidoviće", "Zenicu", "Zvornik", "Žepu", "Žepče", "Živinice", "Bijelo Polje", "Gusinje", "Novu Varoš", "Novi Pazar", "Plav", "Pljevlja", "Priboj", "Prijepolje", "Rožaje", "Sjenicu", "Tutin"];
const myLocations3 = myLocations.map(l => slugify(l, {
    replacement: "-",
    remove: null,
    lower: true
}))
const vakatNames = ['Zora', 'Izlazak sunca', 'Podne', 'Ikindija', 'Akšam', 'Jacija'];

ReactGA.initialize("UA-9142566-1");

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

class Daily extends Component {
    openNav = () => {
        document.getElementById("mySidenav").style.width = "100%";
    }

    closeNav = (e) => {
        e.preventDefault()
        document.getElementById("mySidenav").style.width = "0";
    }

    tick = () => {
        this.setState({
            date: [
                moment().tz("Europe/Sarajevo").format('ddd, D. MMMM'),
                moment().tz("Europe/Sarajevo").format('YYYY'),
                moment().tz("Europe/Sarajevo").format("iD. iMMMM iYYYY").toLowerCase()
            ],
            vaktija: dnevna(this.localization()).vakat
        });
    };

    state = {
        // location: (this.props.root && (cookies.get("location") >= 0 || cookies.get("location") <= 117)) ? cookies.get("location") : this.props.myLocation,
        location: this.localization(),
        date: [
            moment().tz("Europe/Sarajevo").format('ddd, D. MMMM'),
            moment().tz("Europe/Sarajevo").format('YYYY'),
            moment().tz("Europe/Sarajevo").format("iD. iMMMM iYYYY").toLowerCase()
        ],
        vaktija: dnevna(this.localization()).vakat
    }

    componentDidMount() {
        ReactGA.pageview(window.location.pathname + window.location.search);
        this.timerID = setInterval(() => this.tick(), 1000);
        if (!this.props.root) {
            cookies.set("location", this.props.myLocation, { path: '/', domain: '.vaktija.ba', expires: moment().add(1, "y").tz("Europe/Sarajevo").toDate() });
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    localization() {
        let lokacija = this.props.myLocation
        if (this.props.root && localStorage.getItem("mojaLokacija") !== null && cookies.get("location") === undefined) {
            lokacija = myLocations3.indexOf(localStorage.getItem("mojaLokacija"))
            // lokacija = localStorage.getItem("mojaLokacija")
        } else if (this.props.root && localStorage.getItem("mojaLokacija") !== null && cookies.get("location") !== undefined) {
            lokacija = cookies.get("location")
        } else if (this.props.root && localStorage.getItem("mojaLokacija") === null && cookies.get("location") !== undefined) {
            lokacija = cookies.get("location")
        } else if (this.props.root && localStorage.getItem("mojaLokacija") === null && cookies.get("location") === undefined) {
            lokacija = this.props.myLocation
        }
        return lokacija
    }

    render() {

        let { date, vaktija, location } = this.state;

        /*         //^ backward compatibility with localStorage (beta.vaktija.ba)
                let mojaLokacija = null;
                try {
                    mojaLokacija = localStorage.getItem("mojaLokacija");
                } catch (e) {
                    console.log(e);
                }
        
                console.log('cookie', cookies.get('location'));
                console.log('storage', mojaLokacija);
        
                if ((this.props.root && mojaLokacija !== null && (cookies.get('location') === undefined))) {
                    location = mojaLokacija
                }
                else {
                    console.log('krompir')
                }
                //$ backward compatibility with localStorage (beta.vaktija.ba)
         */

        return (
            <Fragment>
                <Helmet>
                    <link
                        rel="canonical"
                        href={`https://vaktija.ba/${slugify(
                            myLocations[location],
                            {
                                replacement: "-",
                                remove: null,
                                lower: true,
                            },
                        )}`}
                    />

                    <meta
                        name="description"
                        content={`Vaktija za ${myLocations2[location]}, ${date[0]} ${date[1]} / ${date[2]}${
                            vakatNames.map((vakatName, index) => ` ${vakatName} ${vaktija[index]}`)
                            }. Preuzmite oficijelne Android, iOS (iPhone, iPad) i Windows mobilne aplikacije, namaz, salat, džuma, sehur, ramazan, iftar, teravija, takvim, bosna i hercegovina, sandžak`}
                    />

                    <title>{`${myLocations[location]} · Vaktija`}</title>
                </Helmet>
                <Grid>
                    <Row>
                        <Col xs={6}>
                            <Link to="/">
                                <img className="hidden-xs hidden-sm" src={Logo} alt="vaktija.ba" height="48"></img>
                                <img className="hidden-md hidden-lg" src={Icon} alt="vaktija.ba" height="32"></img>
                            </Link>
                        </Col>

                        <Col className="text-right" xs={6}>
                            <Glyphicon glyph="map-marker" onClick={this.openNav} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <Location location={location} />
                            <CurrentDate date={date} location={location} />
                        </Col>
                    </Row>
                    <Row className="text-center">
                        {
                            vakatNames.map((vakatName, index) => <Col key={vaktija[index]} xs={12} sm={12} md={12} lg={2}>
                                <VakatTime vakatName={vakatName} vakatTime={vaktija[index]} />
                                <RelativeTime vakatTime={vaktija[index]} />
                            </Col>
                            )
                        }
                    </Row>
                    <Row>
                        <Col className="text-center" xs={12} sm={12} md={12} lg={12}>
                            <br />
                            <br />
                            <Stores />
                        </Col>
                    </Row>
                </Grid>
                <div id="mySidenav" className="sidenav">
                    <a href="true" className="closebtn" onClick={(e) => this.closeNav(e)}>&times;</a>
                    <Locations myLocations={myLocations} weight={weight} />
                </div>
                <br />
                <footer className="footer">
                    <Grid>
                        <Row>
                            <Col xs={12} lg={12}>
                                <p className="text-muted text-center">
                                    <a target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: "#337ab7", fontWeight: 700, fontSize: "smaller" }} href="https://api.vaktija.ba/vaktija/v1">
                                        API
                                    </a> {" "}

                                    <a target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: "#337ab7", fontWeight: 700, fontSize: "smaller" }} href="https://github.com/vaktija">
                                        GITHUB
                                    </a> {" "}

                                    <a target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: "#337ab7", fontWeight: 700, fontSize: "smaller" }} href="mailto:info@vaktija.ba">
                                        KONTAKT
                                    </a> {" | "}
                                    <span style={{ color: "#4a4a4a", fontWeight: 400, fontSize: "x-small" }}>2019 VAKTIJA</span></p>
                            </Col>
                        </Row>
                    </Grid>
                </footer>
            </Fragment >
        )
    }
}

Daily.defaultProps = {
    myLocation: 77,
    myLocationName: "Sarajevo"
}
export default Daily;