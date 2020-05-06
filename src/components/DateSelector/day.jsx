import React, { useContext } from 'react';
import Proptypes from 'prop-types';
import classNames from 'classnames';
import { h0 } from '@/units/fp';
import styles from './index.module.less';
import { DateSelectContext } from '@/common/context';
function Day(props) {
    const { day } = props;
    const { onSelect } = useContext(DateSelectContext); //用context获取到顶层的方法
    if (!day) {
        return <td className={styles.null}></td>;
    }
    const classes = [];
    const now = h0();
    if (day < now) {
        //过去的时间
        classes.push('disabled');
    }
    if ([6, 0].includes(new Date(day).getDay())) {
        //周六或者周日
        classes.push('weekend');
    }
    const dateString = now === day ? '今天' : new Date(day).getDate();
    return (
        <td className={classNames(classes)} onClick={() => onSelect(day)}>
            {dateString}
        </td>
    );
}
Day.propTypes = {
    day: Proptypes.number
};
export default Day;
