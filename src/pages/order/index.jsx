import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import URI from 'urijs';
import dayjs from 'dayjs';
import styles from './index.module.less';
import Header from '@/components/Header';
import Detail from '@/components/Detail';
import Ticket from './components/Ticket';
import Passengers from './components/Passengers';
import Choose from './components/Choose';
import Account from './components/Account';
import Menu from './components/Menu';

import {
    fetchInitial,
    setSearchParsed,
    createAdult,
    createChild,
    removePassenger,
    updatePassenger,
    hideMenu,
    showGenderMenu,
    showFollowAdultMenu,
    showTicketTypeMenu
} from '@/redux/action/order';
const Index = props => {
    const {
        departDate,
        arriveDate,
        departTimeStr,
        arriveTimeStr,
        durationStr,
        price,
        passengers,
        menu,
        isMenuVisible,
        searchParsed,
        dispatch,
        match
    } = props;
    const {
        trainNumber,
        departStation,
        arriveStation,
        type,
        date
    } = match.params;
    useEffect(() => {
        document.title = '订单填写';
        dispatch(setSearchParsed(true));
    }, [dispatch]);
    useEffect(() => {
        if (!searchParsed) {
            return;
        }
        const url = new URI('/rest/order')
            .setSearch('dStation', departStation)
            .setSearch('aStation', arriveStation)
            .setSearch('type', type)
            .setSearch(
                'date',
                dayjs(date)
                    .format('YYYY-MM-DD')
                    .toString()
            );
        dispatch(fetchInitial(url));
    }, [searchParsed, departStation, arriveStation, type, date, dispatch]);
    //设置人员回调方法
    const passengersCallBacks = useMemo(
        () =>
            bindActionCreators(
                {
                    createAdult,
                    createChild,
                    removePassenger,
                    updatePassenger,
                    showGenderMenu,
                    showFollowAdultMenu,
                    showTicketTypeMenu
                },
                dispatch
            ),
        [dispatch]
    );
    //选座回调
    const chooseCallBack = useMemo(
        () => bindActionCreators({ updatePassenger }, dispatch),
        [dispatch]
    );

    //弹出层菜单
    const menuCallBacks = useMemo(
        () =>
            bindActionCreators(
                {
                    hideMenu
                },
                dispatch
            ),
        [dispatch]
    );
    return (
        <div className={styles.container}>
            <div className={styles['header-wrapper']}>
                <Header title="订单填写" showBack={true} />
            </div>
            <div className={styles['content-container']}>
                <Detail
                    departDate={departDate}
                    arriveDate={arriveDate}
                    departTimeStr={departTimeStr}
                    arriveTimeStr={arriveTimeStr}
                    departStation={departStation}
                    arriveStation={arriveStation}
                    durationStr={durationStr}
                    trainNumber={trainNumber}
                >
                    <span
                        className="train-icon"
                        style={{ display: 'block' }}
                    ></span>
                </Detail>
                <Ticket price={price} type={type} />
                <div className={styles.passengers}>
                    <Passengers
                        {...passengersCallBacks}
                        passengers={passengers}
                    />
                    {passengers.length > 0 && (
                        <Choose passengers={passengers} {...chooseCallBack} />
                    )}
                </div>
                <Account length={passengers.length} price={price} />
                <Menu show={isMenuVisible} {...menu} {...menuCallBacks} />
            </div>
        </div>
    );
};
const mapStateToProps = state => {
    return state.get('orderState').toJS();
};
const mapDispatchToProps = dispatch => {
    return { dispatch };
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
