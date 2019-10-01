import React, { Component } from 'react';
import moment from "moment";

class Counter extends Component {

    render() {

        let { vakat, theme } = this.props;

        let date = moment().tz("Europe/Sarajevo");
        let vakatDate = moment(vakat, 'HH:mm').tz("Europe/Sarajevo");

        let diff = vakatDate.diff(date);
        let duration = moment.duration(diff);

        if (vakat === undefined) {
            return null
        } else {
            return <div className={`counter-${theme}`}>{duration.format("*HH:mm:ss")}</div>
        }
    }
}

export default Counter;
