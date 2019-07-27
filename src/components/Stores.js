import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const Stores = () => {
    return (<div className="text-center">
        <a
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: 5 }}
            href="https://play.google.com/store/apps/details?id=ba.vaktija.android"
        >
            <FontAwesomeIcon icon={['fab', 'android']} size="3x" style={{ color: '#4a4a4a' }} />
        </a>
        <a
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: 5 }}
            href="https://itunes.apple.com/us/app/vaktija.ba/id1095343967?ls=1&mt=8"
        >
            <FontAwesomeIcon icon={['fab', 'apple']} size="3x" style={{ color: '#4a4a4a' }} />
        </a>
        <a
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: 5 }}
            href="https://www.microsoft.com/en-us/store/apps/vaktijaba/9nblggh5lc4p"
        >
            <FontAwesomeIcon icon={['fab', 'windows']} size="3x" style={{ color: '#4a4a4a' }} />
        </a>
        {/* <a
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: 5 }}
            href="https://github.com/vaktija"
        >
            <FontAwesomeIcon icon={['fab', 'github']} size="3x" style={{ color: '#4a4a4a' }} />
        </a> */}
    </div>
    );
};

export default Stores;