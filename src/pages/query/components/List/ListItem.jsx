import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import URI from 'urijs';
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
    } = props;
    const url = useMemo(
        () =>
            new URI('ticket.html')
                .setSearch('aStation', aStation)
                .setSearch('dStation', dStation)
                .setSearch('trainNumber', trainNumber)
                .setSearch('date', date)
                .toString(),
        [aStation, dStation, trainNumber, date]
    );

    return (
        <li className={styles['list-item']}>
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
export default ListItem;
