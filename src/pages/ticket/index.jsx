import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.less';
function Index(props) {
    const {} = props;
    console.log(props);
    return <div className={styles.container}>hello</div>;
}
export default Index;
