import React, { memo, useEffect, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './index.module.less';
import CityList from './../CityList';
const CitySelector = memo(function CitySelector(props) {
    const {
        show,
        cityData,
        onBack,
        fetchCityData,
        isLoading,
        onSelect,
    } = props;
    useEffect(() => {
        if (!show || cityData || isLoading) return;
        fetchCityData(); //亲求数据
    }, [show, cityData, isLoading, fetchCityData]);

    const [searchKey, setSearchKey] = useState(''); //关键字搜索
    const key = useMemo(() => searchKey.trim(), [searchKey]); //判断为空
    const toAlpha = useCallback(alpha => {
        //字母搜索   //滚动
        document.querySelector(`#${alpha}`).scrollIntoView();
    }, []);
    const renderCitySections = () => {
        //渲染城市
        if (isLoading) {
            return <div>loading</div>;
        }
        if (cityData) {
            return (
                <CityList
                    sections={cityData.cityList}
                    onSelect={onSelect}
                    toAlpha={toAlpha}
                ></CityList>
            );
        }
        return <div>error</div>;
    };

    return (
        <div className={classnames(styles['city-selector'], { hidden: !show })}>
            <div className={styles['city-search']}>
                <div className={styles['search-back']} onClick={() => onBack()}>
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
                        value={searchKey}
                        className={styles['search-input']}
                        placeholder="城市、车站的中文或拼音"
                        onChange={e => setSearchKey(e.target.value)}
                    />
                </div>
                <i
                    className={classnames(styles['search-clean'], {
                        hidden: key.length === 0,
                    })}
                    onClick={() => setSearchKey('')}
                >
                    &#xf063;
                </i>
            </div>
            <div className={styles.scoll}>{renderCitySections()}</div>
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
