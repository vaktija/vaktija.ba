import React, { Component } from 'react';
import moment from 'moment';
import 'moment-timezone';
import "moment/locale/bs";
class RelativeTime extends Component {

    state = {
        currentTime: moment().tz("Europe/Sarajevo")
    };

    tick = () => {
        this.setState(state => ({
            seconds: state.seconds + 1,
            currentTime: moment().tz("Europe/Sarajevo")
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { currentTime } = this.state;
        const { vakatTime, theme } = this.props;

        return <p><i className={`relative-time-${theme}`}>{currentTime.to(moment(vakatTime, 'HH:mm').tz("Europe/Sarajevo"))}</i></p>
    }
}

export default RelativeTime;