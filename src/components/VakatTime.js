import React from 'react';

function VakatTime(props) {
    const { vakatName, vakatTime, highlight, theme } = props;
    return <h2>
        <small className={`vakat-name-${theme}`}>{vakatName}</small>
        <br />
        <span className={`vakat-time-${theme}${highlight ? ' highlight' : ''}`}>{vakatTime}</span>
    </h2>
}

export default VakatTime;
