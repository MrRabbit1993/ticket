import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import styles from './index.module.less';
function Nav(props) {
    const { date, prev, next, isPrevDisabled, isNextDisabled } = props;
    const currentString = useMemo(() => {
        //当前选择的时间
        const day = dayjs(date);
        return day.format('M月D日') + day.locale('zh-cn').format('ddd');
    }, [date]);
    return (
        <div className={styles.nav}>
            <span
                onClick={prev}
                className={classnames(styles['nav-prev'], {
                    [`${styles['nav-disabled']}`]: isPrevDisabled
                })}
            >
                前一天
            </span>
            <span className={styles['nav-current']}>{currentString}</span>
            <span
                onClick={next}
                className={classnames(styles['nav-next'], {
                    [`${styles['nav-disabled']}`]: isNextDisabled
                })}
            >
                后一天
            </span>
        </div>
    );
}
Nav.propTypes = {
    date: PropTypes.number.isRequired,
    prev: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
    isPrevDisabled: PropTypes.bool.isRequired,
    isNextDisabled: PropTypes.bool.isRequired
};
export default Nav;
