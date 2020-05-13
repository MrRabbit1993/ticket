import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.less';
import CitySection from '../CitySection';
import AlphaIndex from './../AlphaIndex';

//生成字母表
const alphabet = Array.from(new Array(26), (item, idx) => {
    return String.fromCharCode(65 + idx);
});
const CityList = memo(function CityList(props) {
    const { sections, onSelect, toAlpha } = props;
    return (
        <div className={styles['city-list']}>
            <div className="city-cate">
                {sections.map(section => {
                    return (
                        <CitySection
                            key={section.title}
                            title={section.title}
                            onSelect={onSelect}
                            cities={section.citys}
                        />
                    );
                })}
            </div>
            <div className={styles['city-index']}>
                {alphabet.map(alpha => {
                    return (
                        <AlphaIndex
                            key={alpha}
                            alpha={alpha}
                            onClick={toAlpha}
                        />
                    );
                })}
            </div>
        </div>
    );
});
CityList.propTypes = {
    sections: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
};
export default CityList;
