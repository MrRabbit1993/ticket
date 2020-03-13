import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './index.module.less';
import Header from '@/components/Header';
import Journey from './components/Journey';
import DepartDate from './components/DepartDate';
import CitySelector from '@/components/CitySelector';
import {
    exchangeFromTo,
    showCitySelector,
    hideCitySelector,
    fetchCityData,
    setSelectedCity,
    // showDateSelector,
    hideDateSelector,
    // setDepartDate,
    // toggleHighSpeed,
} from '@/redux/action/home';
function Index(props) {
    console.log(props);
    const {
        from,
        to,
        isCitySelectorVisible,
        cityData,
        isLoadingCityData,
        dispatch,
        departDate,
        isDateSelectorVisible,
        highSpeed,
    } = props;
    //日期选择插件的方法集合
    const JourneyCallBacks = useMemo(
        () =>
            bindActionCreators(
                {
                    exchangeFromTo,
                    showCitySelector,
                },
                dispatch
            ),
        [dispatch]
    );

    //城市选择的方法集合
    const citySelectorCallBacks = useMemo(
        () =>
            bindActionCreators(
                {
                    onBack: hideCitySelector,
                    fetchCityData,
                    onSelect: setSelectedCity,
                },
                dispatch
            ),
        [dispatch]
    );
    //时间选择方法集合
    const departDateCallBacks = useMemo(
        () =>
            bindActionCreators(
                {
                    onBack: hideDateSelector,
                },
                dispatch
            ),
        [dispatch]
    );
    return (
        <div className={styles.indexContainer}>
            <div className={styles.headerWrapper}>
                <Header title="火车票" />
            </div>
            <form className={styles.form}>
                <Journey from={from} to={to} {...JourneyCallBacks} />
                <DepartDate time={departDate} {...departDateCallBacks} />
                {/* <DepartDate time={departDate} {...departDateCallBacks} />
                <HighSpeed highSpeed={highSpeed} {...highSpeedCallBacks} />
                <Submit />  */}
            </form>
            <CitySelector
                show={isCitySelectorVisible}
                cityData={cityData}
                isLoading={isLoadingCityData}
                {...citySelectorCallBacks}
            />
        </div>
    );
}
function mapStateToProps(state) {
    return state.get('homeState').toJS();
}
function mapDispatchToProps(dispatch) {
    return { dispatch };
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);
