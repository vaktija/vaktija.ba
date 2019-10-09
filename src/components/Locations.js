import React from 'react';
import { Link } from "react-router-dom";
import slugify from 'slugify';
import { locations, locationsShort, weights } from '../data/vaktija.json';

function Locations() {
    return (
        <ul>
            {locations.map((location, index) => {
                return (
                    <li key={index}>
                        <Link
                            className={`location-${weights[index]}`}
                            to={`/${slugify(location, {
                                replacement: "-",
                                remove: null,
                                lower: true,
                            })}`}
                        >
                            {locationsShort[index]}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default Locations;
