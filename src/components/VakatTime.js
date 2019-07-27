import React, { Component, Fragment } from 'react';
class VakatTime extends Component {
    render() {
        let { vakatName, vakatTime } = this.props;

        return <Fragment>
            <h2>
                <small>{vakatName}</small>
                <br />
                <span>{vakatTime}</span>
            </h2>
        </Fragment>
    }
}

export default VakatTime;
