import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './index.module.less';
const Filter = memo(function Filter(props) {
    const { name, checked, dispatch, value } = props;
    return (
        <li
            className={classnames(styles.li, {
                [`${styles.checked}`]: checked,
            })}
            onClick={() => dispatch({ payload: value, type: 'toggle' })}
        >
            {name}
        </li>
    );
});
Filter.protoTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
};
export default Filter;
