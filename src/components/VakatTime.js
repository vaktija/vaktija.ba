import React, { Component, Fragment } from 'react';
class VakatTime extends Component {
    render() {
        let { vakatName, vakatTime, highlight } = this.props;

        return <Fragment>
            <h2>
                <small>{vakatName}</small>
                <br />
                <span className={`${highlight ? 'highlight' : ''}`}>{vakatTime}</span>
            </h2>
        </Fragment>
    }
}

export default VakatTime;
