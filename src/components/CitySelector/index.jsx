import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './index.module.less';
const CitySelector = memo(function CitySelector(props) {
    const { a } = props;
    const show = 1;
    console.log(styles['city-selector']);
    console.log(classnames(styles['city-selector']));
    console.log(12);
    const setSearchKey = () => {};
    return (
        <div className={classnames(styles['city-selector'], { hidden: !show })}>
            <div className={styles['city-search']}>
                <div className={styles['search-back']}>
                    <svg width="42" height="42">
                        <polyline
                            points="25,13 16,21 25,29"
                            stroke="#fff"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </div>
                <div className={styles['search-input-wrapper']}>
                    <input
                        type="text"
                        // value={searchKey}
                        className={styles['search-input']}
                        placeholder="城市、车站的中文或拼音"
                        // onChange={e => setSearchKey(e.target.value)}
                    />
                </div>
                {/* , { hidden: key.length === 0 } */}
                <i
                    className={classnames(styles['search-clean'])}
                    onClick={() => setSearchKey('')}
                >
                    &#xf063;
                </i>
            </div>
        </div>
    );
});
CitySelector.propTypes = {
    show: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onBack: PropTypes.func.isRequired,
    fetchCityData: PropTypes.func.isRequired,
    cityData: PropTypes.object,
    onSelect: PropTypes.func.isRequired,
};
export default CitySelector;
