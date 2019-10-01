import React, { Component, Fragment } from 'react';
class VakatTime extends Component {
    render() {
        let { vakatName, vakatTime, highlight, theme } = this.props;
        // TODO podne/dzuma
        return <Fragment>
            <h2>
                <small className={`vakat-name-${theme}`}>{vakatName}</small>
                <br />
                <span className={`vakat-time-${theme}${highlight ? ' highlight' : ''}`}>{vakatTime}</span>
            </h2>
        </Fragment>
    }
}

export default VakatTime;
