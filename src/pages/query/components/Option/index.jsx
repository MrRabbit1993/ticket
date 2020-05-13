import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Filter from '../Filter';
import styles from './index.module.less';
const Option = memo(function Option(props) {
    const { title, options, checkedMap, dispatch } = props;
    return (
        <div className={styles.option}>
            <h3>{title}</h3>
            <ul>
                {options.map(option => {
                    return (
                        <Filter
                            key={option.value}
                            {...option}
                            checked={option.value in checkedMap}
                            dispatch={dispatch}
                        />
                    );
                })}
            </ul>
        </div>
    );
});
Option.protoTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    checkMap: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};
export default Option;
