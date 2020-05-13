import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.less';
import Channels from './channel';
const Seat = memo(function Seat(props) {
    const {
        type,
        priceMsg,
        ticketsLeft,
        channels,
        expanded,
        toggle,
        idx,
    } = props;
    return (
        <li className={styles.li}>
            <div className={styles.bar} onClick={() => toggle(idx)}>
                <span className={styles.seat}>{type}</span>
                <span className={styles.price}>
                    <i>￥</i>
                    {priceMsg}
                </span>
                <span className={styles.btn}>{expanded ? '预定' : '收起'}</span>
                <span className={styles.num}>{ticketsLeft}</span>
            </div>
            <div
                className={styles.channels}
                style={{ height: expanded ? channels.length * 55 + 'px' : 0 }}
            >
                {channels.map(channel => {
                    return (
                        <Channels key={channel.name} {...channel} type={type} />
                    );
                })}
            </div>
        </li>
    );
});
Seat.propTypes = {
    type: PropTypes.string.isRequired,
    priceMsg: PropTypes.string.isRequired,
    ticketsLeft: PropTypes.string.isRequired,
    channels: PropTypes.array.isRequired,
    expanded: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    idx: PropTypes.number.isRequired,
};
export default Seat;
