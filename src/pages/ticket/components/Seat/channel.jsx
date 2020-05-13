import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import styles from './index.module.less';
import { withRouter } from 'react-router-dom';
import { TrainContext } from '@/common/context';
const Channel = memo(function(props) {
    const { name, desc, type, history } = props;
    const {
        trainNumber,
        departStation,
        arriveStation,
        departDate,
    } = useContext(TrainContext);
    const _nativer = () => {
        history.push({
            pathname: `/order/${trainNumber}/${departStation}/${arriveStation}/${type}/${dayjs(
                departDate
            ).format('YYYY-MM-DD')}`,
        });
    };
    return (
        <div className={styles.channel}>
            <div className={styles.middle}>
                <div className={styles.name}>{name}</div>
                <div className={styles.desc}>{desc}</div>
            </div>
            <a className={styles['buy-wrapper']} onClick={_nativer}>
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
export default withRouter(Channel);
