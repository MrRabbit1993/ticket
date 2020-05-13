import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.less';

import switchImg from '@/imgs/switch.svg';

function Journey(props) {
    const { from, to, exchangeFromTo, showCitySelector } = props;
    return (
        <div className={styles.journey}>
            <div
                className={styles['journey-station']}
                onClick={() => showCitySelector(true)}
            >
                <input
                    type="text"
                    readOnly
                    name="from"
                    value={from}
                    className={styles['journey-input']}
                />
            </div>
            <div className={styles['journey-switch']} onClick={exchangeFromTo}>
                <img src={switchImg} width="70" height="40" alt="switch"></img>
            </div>
            <div
                className={styles['journey-station']}
                onClick={() => showCitySelector(false)}
            >
                <input
                    type="text"
                    readOnly
                    name="to"
                    value={to}
                    className={`${styles['journey-input']} ${styles['journey-to']}`}
                />
            </div>
        </div>
    );
}
Journey.propTypes = {
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    exchangeFromTo: PropTypes.func.isRequired,
    showCitySelector: PropTypes.func.isRequired
};
export default Journey;
