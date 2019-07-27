import React, { Component } from "react";
import Helmet from "react-helmet";
import slugify from "slugify";
import data from "../data/vaktija2.json";

import ReactGA from "react-ga";
ReactGA.initialize("UA-117519966-1");
// ReactGA.pageview(window.location.pathname + window.location.search);

class Head extends Component {
    componentWillReceiveProps(nextProps) {
        if (this.props.lokacija !== nextProps.lokacija) {
            ReactGA.pageview(window.location.pathname + window.location.search, ['UA-117519966-1'], `${nextProps.slugLokacija} · Vaktija`);
        }
    }

    componentDidMount() {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
    render() {
        const { lokacija, lokaciju } = data;
        let loko;
        lokacija.indexOf(this.props.slugLokacija) > 106
            ? (loko = "Sandžak")
            : (loko = "Bosna i Hercegovina");

        return (
            <Helmet>
                <link
                    rel="canonical"
                    href={`http://beta.vaktija.ba/${slugify(
                        lokacija[this.props.lokacija],
                        {
                            replacement: "-",
                            remove: null,
                            lower: true,
                        },
                    )}`}
                />
                <meta
                    name="description"
                    content={`Vaktija za ${lokaciju[this.props.lokacija]} - ${loko}, ${
                        this.props.datum
                        } zora ${this.props.vaktija.zora.format(
                            "h:mm",
                        )} izlazak sunca ${this.props.vaktija.izlazakSunca.format(
                            "h:mm",
                        )} podne ${this.props.vaktija.podne.format(
                            "h:mm",
                        )} ikindija ${this.props.vaktija.ikindija.format(
                            "h:mm",
                        )} akšam ${this.props.vaktija.aksam.format(
                            "h:mm",
                        )} jacija ${this.props.vaktija.jacija.format(
                            "h:mm",
                        )}. Preuzmite oficijelne Android, iOS (iPhone, iPad) i Windows mobilne aplikacije, namaz, salat, džuma, sehur, ramazan, iftar, teravija, takvim, bosna i hercegovina, sandžak`}
                />
                <title>{`${lokacija[this.props.lokacija]} · Vaktija`}</title>
            </Helmet>
        );
    }
}

export default Head;
