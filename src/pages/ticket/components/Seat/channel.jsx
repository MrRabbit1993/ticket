import React, { memo, useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import URI from 'urijs';
import dayjs from 'dayjs';
import styles from './index.module.less';
import { TrainContext } from '@/common/context';
const Channel = memo(function(props) {
    const { name, desc, type } = props;
    const {
        trainNumber,
        departStation,
        arriveStation,
        departDate,
    } = useContext(TrainContext);
    console.log('props', props);
    const src = useMemo(() => {
        return new URI('order.html')
            .setSearch('trainNumber', trainNumber)
            .setSearch('dStation', departStation)
            .setSearch('aStation', arriveStation)
            .setSearch('type', type)
            .setSearch('date', dayjs(departDate).format('YYYY-MM-DD'))
            .toString();
    }, [type, trainNumber, departStation, arriveStation, departDate]);
    return (
        <div className={styles.channel}>
            <div className={styles.middle}>
                <div className={styles.name}>{name}</div>
                <div className={styles.desc}>{desc}</div>
            </div>
            <a href={src} className={styles['buy-wrapper']}>
                <div className={styles.buy}>买票</div>
            </a>
        </div>
    );
});
Channel.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};
export default Channel;
