import React from 'react';
import { locations } from '../data/vaktija.json';

function Location(props) {
    const { theme, location } = props;
    return <h1 className="text-center">
        <span className={`location-${theme}`} style={{ display: "block" }}>
            {locations[location]}
        </span>
    </h1>
}

export default Location;