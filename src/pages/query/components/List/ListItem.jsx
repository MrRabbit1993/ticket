import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styles from './index.module.less';

const ListItem = memo(function ListItem(props) {
    const {
        dTime,
        aTime,
        dStation,
        aStation,
        trainNumber,
        date,
        time,
        priceMsg,
        dayAfter,
        history,
    } = props;
    const _navigation = () => {
        console.log('------------');
        console.log('aStation', aStation);
        console.log('dStation', dStation);
        console.log('trainNumber', trainNumber);
        console.log('aStation', aStation);
        console.log('date', date);
        console.log(props);
        // history.push({ pathname: '/ticket' ,state :{'date':date}});
        history.push({ pathname: '/ticket/' + date });
        console.log('------------');
    };

    return (
        <li className={styles['list-item']} onClick={_navigation}>
            <span className={styles['item-time']}>
                <em>{dTime}</em>
                <br />
                <em className={styles['em-light']}>
                    {aTime}
                    <i className={styles['time-after']}>{dayAfter}</i>
                </em>
            </span>
            <span className={styles['item-stations']}>
                <em>
                    <i
                        className={`${styles['train-station']} ${styles['train-start']}`}
                    >
                        始
                    </i>
                    {dStation}
                </em>
                <br />
                <em className={styles['em-light']}>
                    <i
                        className={`${styles['train-station']} ${styles['train-end']}`}
                    >
                        终
                    </i>
                    {aStation}
                </em>
            </span>
            <span className={styles['item-train']}>
                <em>{trainNumber}</em>
                <br />
                <em className={styles['em-light']}>{time}</em>
            </span>
            <span className={styles['item-ticket']}>
                <em>{priceMsg}</em>
                <br />
                <em className={styles['em-light-orange']}>可抢票</em>
            </span>
        </li>
    );
});
ListItem.propTypes = {
    dTime: PropTypes.string.isRequired,
    aTime: PropTypes.string.isRequired,
    dStation: PropTypes.string.isRequired,
    aStation: PropTypes.string.isRequired,
    trainNumber: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    priceMsg: PropTypes.string.isRequired,
    dayAfter: PropTypes.string.isRequired,
};
export default withRouter(ListItem);
