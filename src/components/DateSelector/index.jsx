import React from 'react';
import Proptypes from 'prop-types';
import classnames from 'classnames';
import styles from './index.module.less';
import Header from '@/components/Header';
import Month from './month';
import { DateSelectContext } from '@/common/context';
function DateSelector(props) {
    const { show, onSelect, onBack } = props;
    const now = new Date();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    now.setDate(1);
    const monthSequence = [now.getTime()];
    now.setMonth(now.getMonth() + 1); //当前月
    monthSequence.push(now.getTime());
    now.setMonth(now.getMonth() + 1); //下一个月
    monthSequence.push(now.getTime());
    return (
        <div className={classnames(styles['date-selector'], { hidden: !show })}>
            <Header title="日期选择" onBack={onBack} />
            <div className={styles['date-selector-tables']}>
                <DateSelectContext.Provider value={{ onSelect }}>
                    {monthSequence.map(month => {
                        return (
                            <Month key={month} startingTimeInMonth={month} />
                        );
                    })}
                </DateSelectContext.Provider>
            </div>
        </div>
    );
}
DateSelector.propTypes = {
    show: Proptypes.bool.isRequired,
    onSelect: Proptypes.func.isRequired,
    onBack: Proptypes.func.isRequired,
};
export default DateSelector;
