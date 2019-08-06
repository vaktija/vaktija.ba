import React, { Component } from 'react';
import moment from "moment-hijri";
import 'moment-timezone';
import "moment-duration-format";
import "moment/locale/bs";
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const vakatNames = ['Zora', 'Izlazak sunca', 'Podne', 'Ikindija', 'Akšam', 'Jacija'];

class Mobile extends Component {

    constructor(props) {

        let iMonths = [
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
            "Zu-l-hidždže",
        ];

        let weekdaysShort = ["ned", "pon", "uto", "sri", "čet", "pet", "sub"];
        moment.updateLocale("bs", {
            iMonths,
            weekdaysShort
        });

        super(props);

        this.state = {
            mojaLokacija: this.localization(),
            data: {},
            loading: true,
            date: [
                moment().tz("Europe/Sarajevo").format('ddd, D. MMMM'),
                moment().tz("Europe/Sarajevo").format('YYYY'),
                moment().tz("Europe/Sarajevo").format("iD. iMMMM iYYYY").toLowerCase()
            ],
        }
    }

    localization() {
        let lokacija = this.props.myLocation

        if (cookies.get("location") !== undefined) {
            lokacija = cookies.get("location")
        }
        return lokacija
    }

    changeLocation = (e) => {
        this.setState({ mojaLokacija: Number(e.target.value) })
        cookies.set("location", Number(e.target.value), { path: '/', domain: '.vaktija.ba', expires: moment().add(1, "y").tz("Europe/Sarajevo").toDate() });
    }

    componentDidMount() {
        fetch(`https://api.vaktija.ba/vaktija/v1/${this.state.mojaLokacija}`)
            .then(response => response.json())
            .then(data => this.setState({ data, loading: false }))
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.state.mojaLokacija !== nextState.mojaLokacija) {
            this.setState({ loading: true })
            fetch(`https://api.vaktija.ba/vaktija/v1/${nextState.mojaLokacija}`)
                .then(response => response.json())
                .then(data => this.setState({ data, loading: false }))
        }
        // cookies.set("location", nextState.mojaLokacija, { path: '/' });
        cookies.set("location", nextState.mojaLokacija, { path: '/', domain: '.vaktija.ba', expires: moment().add(1, "y").tz("Europe/Sarajevo").toDate() });
    }

    render() {

        let { lokacije } = this.props;
        let { mojaLokacija, data, date, loading } = this.state;

        return (
            <div>
                {
                    loading ? <p style={{ textAlign: "center" }}>...</p> : <table style={{ marginTop: "2px", marginBottom: "2px", marginLeft: "auto", marginRight: "auto" }}>
                        <tbody>
                            <tr>
                                <th style={{ textAlign: "center", fontSize: "large" }} colSpan={2}>{lokacije[mojaLokacija]}</th>
                            </tr>
                            <tr>
                                <td colSpan={2}>{date[0]} {date[1]} / {date[2]}</td>
                            </tr>
                            {data.vakat.map((v, index) =>
                                <tr key={index}>
                                    <th>{vakatNames[index]}</th>
                                    <td>{v}</td>
                                </tr>

                            )}
                            <tr>
                                <td style={{ textAlign: "center" }} colSpan={2}>
                                    <select onChange={(e) => this.changeLocation(e)} defaultValue={mojaLokacija}>
                                        {
                                            lokacije.map((l, index) => <option key={index} value={index}>{l}</option>)
                                        }
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "center" }} colSpan={2}>
                                    <a href="https://vaktija.ba">vaktija.ba</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                }
            </div>
        );
    }
}

Mobile.defaultProps = {
    myLocation: 77,
    myLocationName: "Sarajevo"
}

export default Mobile;