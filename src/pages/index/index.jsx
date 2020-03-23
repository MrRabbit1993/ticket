import React, { useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './index.module.less';
import { h0 } from '@/units/fp';
import Header from '@/components/Header';
import Journey from './components/Journey';
import DepartDate from './components/DepartDate';
import CitySelector from '@/components/CitySelector';
import DateSelector from '@/components/DateSelector';
import HighSpeed from './components/HighSpeed';
import Submit from './components/Submit';
import {
    exchangeFromTo,
    showCitySelector,
    hideCitySelector,
    fetchCityData,
    setSelectedCity,
    showDateSelector,
    hideDateSelector,
    setDepartDate,
    toggleHighSpeed,
} from '@/redux/action/home';
function Index(props) {
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
        history,
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
                    onClick: showDateSelector,
                },
                dispatch
            ),
        [dispatch]
    );
    //日期选择器方法
    const dateSelectorCallBacks = useMemo(
        () =>
            bindActionCreators(
                {
                    onBack: hideDateSelector,
                },
                dispatch
            ),
        [dispatch]
    );
    //日期的选择事件
    const onSelectDate = useCallback(
        day => {
            if (!day) return; //无效的时间
            if (day < h0) return; //过去 时间
            dispatch(setDepartDate(day));
            dispatch(hideDateSelector(day));
        },
        [dispatch]
    );
    //只看高铁动车的事件
    const highSpeedCallBacks = useMemo(
        () =>
            bindActionCreators(
                {
                    toggle: toggleHighSpeed,
                },
                dispatch
            ),
        [dispatch]
    );
    const submit = useCallback(() => {
        history.push({ pathname: '/query' });
    }, [history]);
    return (
        <div className={styles.indexContainer}>
            <div className={styles.headerWrapper}>
                <Header title="火车票" />
            </div>
            <form className={styles.form}>
                <Journey from={from} to={to} {...JourneyCallBacks} />
                <DepartDate time={departDate} {...departDateCallBacks} />
                <HighSpeed highSpeed={highSpeed} {...highSpeedCallBacks} />
                <Submit onSubmit={submit} />
            </form>
            <CitySelector
                show={isCitySelectorVisible}
                cityData={cityData}
                isLoading={isLoadingCityData}
                {...citySelectorCallBacks}
            />
            <DateSelector
                show={isDateSelectorVisible}
                {...dateSelectorCallBacks}
                onSelect={onSelectDate}
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
