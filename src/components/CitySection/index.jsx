import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.less';
import CityItem from './../CityItem';

const CitySection = memo(function CitySection(props) {
    const { title, cities = [], onSelect } = props;
    return (
        <ul className={styles['city-ul']}>
            <li className={styles['city-li']} key="title" id={title}>
                {title}{' '}
            </li>
            {cities.map(city => {
                return (
                    <CityItem
                        key={city.name}
                        name={city.name}
                        onSelect={onSelect}
                    />
                );
            })}
        </ul>
    );
});
CitySection.propTypes = {
    title: PropTypes.string.isRequired,
    cities: PropTypes.array,
    onSelect: PropTypes.func.isRequired,
};
export default CitySection;
