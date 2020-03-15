import React, { memo } from 'react';

import styles from './index.module.less';

const Submit = memo(function Submit(props) {
    const { onSubmit } = props;
    return (
        <div className={styles.submit}>
            <button
                type="button"
                className={styles['submit-button']}
                onClick={onSubmit}
            >
                搜索
            </button>
        </div>
    );
});
export default Submit;
