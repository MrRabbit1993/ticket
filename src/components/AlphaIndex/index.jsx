import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.less';

const AlphaIndex = memo(function AlphaIndex(props) {
    const { alpha, onClick } = props;
    return (
        <i className={styles['city-index-item']} onClick={() => onClick(alpha)}>
            {alpha}
        </i>
    );
});
AlphaIndex.propTypes = {
    alpha: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
export default AlphaIndex;
