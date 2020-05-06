import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.less';
const Passenger = memo(function Passenger(props) {
    const {
        id,
        name,
        ticketType,
        licenceNo,
        gender,
        birthday,
        onRemove,
        onUpdate,
        showGenderMenu,
        showFollowAdultMenu,
        showTicketTypeMenu,
        showFollowAdultName,
    } = props;
    const isAdult = ticketType === 'adult';
    return (
        <li className={styles.passenger}>
            <i className={styles.delete} onClick={() => onRemove(id)}>
                -
            </i>
            <ol className={styles.items}>
                <li className={styles.item}>
                    <label className={`${styles.label} ${styles.name}`}>
                        姓名
                    </label>
                    <input
                        type="text"
                        className={`${styles.input} ${styles.name}`}
                        placeholder="乘客姓名"
                        value={name}
                        onChange={e => onUpdate(id, { name: e.target.value })}
                    />
                    <label
                        className={styles['ticket-type']}
                        onClick={() => showTicketTypeMenu(id)}
                    >
                        {isAdult ? '成人票' : '儿童票'}
                    </label>
                </li>
                {isAdult && (
                    <li className={styles.item}>
                        <label
                            className={`${styles.label} ${styles.licenceNo}`}
                        >
                            身份证
                        </label>
                        <input
                            type="text"
                            className={`${styles.input} ${styles.licenceNo}`}
                            placeholder="证件号码"
                            value={licenceNo}
                            onChange={e =>
                                onUpdate(id, { licenceNo: e.target.value })
                            }
                        />
                    </li>
                )}
                {!isAdult && (
                    <li className={`${styles.item} ${styles.arrow}`}>
                        <label className={`${styles.label} ${styles.gender}`}>
                            性别
                        </label>
                        <input
                            type="text"
                            className={`${styles.input} ${styles.gender}`}
                            placeholder="请选择"
                            onClick={() => showGenderMenu(id)}
                            value={
                                gender === 'male'
                                    ? '男'
                                    : gender === 'female'
                                    ? '女'
                                    : ''
                            }
                            readOnly
                        />
                    </li>
                )}
                {!isAdult && (
                    <li className={styles.item}>
                        <label className={`${styles.label} ${styles.birthday}`}>
                            出生日期
                        </label>
                        <input
                            type="text"
                            className={`${styles.input} ${styles.birthday}`}
                            placeholder="如20200309"
                            value={birthday}
                            onChange={e =>
                                onUpdate(id, { birthday: e.target.value })
                            }
                        />
                    </li>
                )}
                {!isAdult && (
                    <li className={`${styles.item} ${styles.arrow}`}>
                        <label
                            className={`${styles.label} ${styles.followAdult}`}
                        >
                            同行成人
                        </label>
                        <input
                            type="text"
                            className={`${styles.input} ${styles.followAdult}`}
                            placeholder="请选择"
                            value={showFollowAdultName}
                            onClick={() => showFollowAdultMenu(id)}
                            readOnly
                        />
                    </li>
                )}
            </ol>
        </li>
    );
});
Passenger.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    followAdult: PropTypes.number,
    ticketType: PropTypes.string.isRequired,
    licenceNo: PropTypes.string,
    gender: PropTypes.string,
    birthday: PropTypes.string,
    onRemove: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    showFollowAdultMenu: PropTypes.func.isRequired,
    showTicketTypeMenu: PropTypes.func.isRequired,
    showFollowAdultName: PropTypes.string,
};
export default Passenger;
