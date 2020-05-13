import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.less';
import ListItem from './ListItem';
const List = memo(function List(props) {
    const { list } = props;
    return (
        <ul className={styles.list}>
            {list.map(item => {
                return <ListItem {...item} key={item.trainNumber} />;
            })}
        </ul>
    );
});
List.propTypes = {
    list: PropTypes.array.isRequired
};
export default List;
