import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.less';
const Ticket = memo(function Ticket(props) {
    const { price, type } = props;
    return (
        <div className={styles.ticket}>
            <p>
                <span className={styles['ticket-type']}>{type}</span>
                <span className={styles['ticket-price']}>{price}</span>
            </p>
            <div className={styles.label}>坐席</div>
        </div>
    );
});
Ticket.propTypes = {
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string.isRequired
};
export default Ticket;
