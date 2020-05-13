import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.less';

const CityItem = memo(function CityItem(props) {
    const { name, onSelect } = props;
    return (
        <li className={styles['city-li']} onClick={() => onSelect(name)}>
            {name}
        </li>
    );
});
CityItem.propTypes = {
    name: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};
export default CityItem;
