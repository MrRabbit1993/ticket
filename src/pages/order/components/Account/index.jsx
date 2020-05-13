import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './index.module.less';
const Account = memo(function Account(props) {
    const { price = 0, length } = props;
    const [expanded, setExpanded] = useState(false);
    return (
        <div className={styles.account}>
            <div
                className={classnames(styles.price, {
                    [styles.expanded]: expanded,
                })}
                onClick={() => setExpanded(!expanded)}
            >
                <div className={styles.money}>{length * price}</div>
                <div className={styles.amount}>支付金额</div>
            </div>
            <div className={styles.button}>提交订单</div>
            <div
                className={classnames(styles.layer, { hidden: !expanded })}
                onClick={() => setExpanded(false)}
            ></div>
            <div className={classnames(styles.detail, { hidden: !expanded })}>
                <div className={styles.title}>金额详情</div>
                <ul>
                    <li>
                        <span>火车票</span>
                        <span>￥{price}</span>
                        <span>&#xD7;{length}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
});
Account.propTypes = {
    price: PropTypes.number,
    length: PropTypes.number.isRequired,
};
export default Account;
