import React from 'react';
import { locations } from '../data/vaktija.json';

function CurrentDate({ date, theme, location }) {
    return <p className="text-center">
        <i className={`date-${theme}`}>{date[0]} <a className={`year-${theme}`} href={`download/pdf/${locations[location]}_2019.pdf`}>{date[1]}</a> / {date[2]}</i>
    </p >
}

export default CurrentDate;
