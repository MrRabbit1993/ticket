import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.module.less';
function HighSpeed(props) {
    const { highSpeed, toggle } = props;
    return (
        <div className={styles['high-speed']}>
            <div className={styles['high-speed-label']}>只看高铁/动车</div>
            <div
                className={styles['high-speed-switch']}
                onClick={() => toggle()}
            >
                <input type="hidden" name="highSpeed" value={highSpeed} />
                <div
                    className={classnames(styles['high-speed-track'], {
                        [`${styles['checked']}`]: highSpeed
                    })}
                >
                    <span
                        className={classnames(styles['high-speed-handle'], {
                            [`${styles['checked']}`]: highSpeed
                        })}
                    ></span>
                </div>
            </div>
        </div>
    );
}
HighSpeed.propTypes = {
    highSpeed: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
};
export default HighSpeed;
