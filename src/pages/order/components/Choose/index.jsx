import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './index.module.less';
const Choose = memo(function Choose(props) {
    const { passengers, updatePassenger } = props;
    function createSeat(seatType) {
        return (
            <div>
                {passengers.map(passenger => {
                    return (
                        <p
                            key={passenger.id}
                            data-text={seatType}
                            onClick={() =>
                                updatePassenger(passenger.id, {
                                    seat: seatType
                                })
                            }
                            className={classnames(styles.seat, {
                                [styles.active]: passenger.seat === seatType
                            })}
                        >
                            &#xe02d;
                        </p>
                    );
                })}
            </div>
        );
    }
    return (
        <div className={styles.choose}>
            <p className={styles.tip}>在线选座</p>
            <div className={styles.container}>
                <div className={styles.seats}>
                    <div>窗</div>
                    {createSeat('A')}
                    {createSeat('B')}
                    {createSeat('C')}
                    <div>过道</div>
                    {createSeat('D')}
                    {createSeat('F')}
                    <div>窗</div>
                </div>
            </div>
        </div>
    );
});
Choose.propTypes = {
    passengers: PropTypes.array.isRequired,
    updatePassenger: PropTypes.func.isRequired
};
export default Choose;
