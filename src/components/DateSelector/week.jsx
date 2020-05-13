import React from 'react';
import Proptypes from 'prop-types';
import Day from './day';
import styles from './index.module.less';
function Week(props) {
    const { days } = props;
    return (
        <tr className={styles['date-table-days']}>
            {days.map((day, idx) => {
                return <Day key={idx} day={day} />;
            })}
        </tr>
    );
}
Week.propTypes = {
    days: Proptypes.array.isRequired,
};
export default Week;
