import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './index.module.less';

function Header(props) {
    let { title, onBack, history, showBack } = props;
    if (!onBack) {
        onBack = () => {
            history.goBack();
        };
    }
    return (
        <div className={styles.header}>
            {showBack ? (
                <div className={styles.headerBack} onClick={onBack}>
                    <svg width="42" height="42">
                        <polyline
                            points="25,13 16,21 25,29"
                            stroke="#fff"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </div>
            ) : null}

            <h1 className={styles.headerTitle}> {title}</h1>
        </div>
    );
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func,
    showBack: PropTypes.bool
};
export default withRouter(Header);
