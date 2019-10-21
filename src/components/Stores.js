import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Stores({ theme }) {
    return <div className="text-center">
        <a className={`store-${theme}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: 10 }}
            href="https://play.google.com/store/apps/details?id=ba.vaktija.android">
            <FontAwesomeIcon icon={['fab', 'android']} size="3x" />
        </a>
        <a className={`store-${theme}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: 10 }}
            href="https://itunes.apple.com/us/app/vaktija.ba/id1095343967?ls=1&mt=8">
            <FontAwesomeIcon icon={['fab', 'apple']} size="3x" />
        </a>
        <a className={`store-${theme}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: 10 }}
            href="https://www.microsoft.com/en-us/store/apps/vaktijaba/9nblggh5lc4p">
            <FontAwesomeIcon icon={['fab', 'windows']} size="3x" />
        </a>
    </div>
};

export default Stores;
