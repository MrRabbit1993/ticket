import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import URI from 'urijs';
import dayjs from 'dayjs';
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import useNav from '@/common/customHooks/useNav';
import List from './components/List';
import {
    setTrainList,
    // setTicketTypes,
    // setTrainTypes,
    // setDepartStations,
    setArriveStations,
    prevDate,
    nextDate,
    // toggleOrderType,
    // toggleHighSpeed,
    // toggleOnlyTickets,
    // toggleIsFiltersVisible,
    // setCheckedTicketTypes,
    // setCheckedTrainTypes,
    // setCheckedDepartStations,
    // setCheckedArriveStations,
    // setDepartTimeStart,
    // setDepartTimeEnd,
    // setArriveTimeStart,
    // setArriveTimeEnd,
} from '@/redux/action/query';
function Query(props) {
    const {
        from,
        to,
        dispatch,
        searchParsed,
        departDate,
        highSpeed,
        orderType,
        onlyTickets,
        checkedTicketTypes,
        checkedTrainTypes,
        checkedDepartStations,
        checkedArriveStations,
        departTimeStart,
        departTimeEnd,
        arriveTimeStart,
        arriveTimeEnd,
        // ticketTypes,
        // trainTypes,
        // departStations,
        // arriveStations,
        trainList,
        // isFiltersVisible,
    } = props;
    console.log(props);
    //请求接口
    useEffect(() => {
        // if (!searchParsed) return; //如果没解析完地址
        const url = new URI('/rest/query')
            .setSearch('from', from)
            .setSearch('to', to)
            .setSearch('date', dayjs(departDate).format('YYYY-MM-DD'))
            .setSearch('highSpeed', highSpeed) //高铁动车
            .setSearch('orderType', orderType) //订单类型
            .setSearch('onlyTickets', onlyTickets) //只看有票
            .setSearch(
                'checkedTicketTypes',
                Object.keys(checkedTicketTypes).join()
            ) //票类型
            .setSearch(
                'checkedTrainTypes',
                Object.keys(checkedTrainTypes).join()
            ) //交通类型
            .setSearch(
                'checkedDepartStations',
                Object.keys(checkedDepartStations).join()
            )
            .setSearch(
                'checkedArriveStations',
                Object.keys(checkedArriveStations).join()
            )
            .setSearch('departTimeStart', departTimeStart)
            .setSearch('departTimeEnd', departTimeEnd)
            .setSearch('arriveTimeStart', arriveTimeStart)
            .setSearch('arriveTimeEnd', arriveTimeEnd)
            .toString();
        //请求
        // return
        fetch(url)
            .then(response => response.json())
            .then(response => {
                console.log('请求');
                const {
                    dataMap: {
                        directTrainInfo: {
                            trains,
                            filter: {
                                ticketType,
                                trainType,
                                depStation,
                                arrStation,
                            },
                        },
                    },
                } = response;
                console.log(trains);
                // console.log(ticketType)
                // console.log(trainType)
                // console.log(depStation)
                console.log('==============', arrStation);
                dispatch(setTrainList(trains)); //设置车站列表数据
                // dispatch(setTicketTypes(ticketType));//设置票类型
                // dispatch(setTrainTypes(trainType));//设置车次
                // dispatch(setDepartStations(depStation));//设置起始站
                dispatch(setArriveStations(arrStation)); //设置到达站
            });
    }, [
        from,
        to,
        departDate,
        highSpeed,
        orderType,
        onlyTickets,
        checkedTicketTypes,
        checkedTrainTypes,
        checkedDepartStations,
        checkedArriveStations,
        departTimeStart,
        departTimeEnd,
        arriveTimeStart,
        arriveTimeEnd,
        dispatch,
    ]);
    const { isPrevDisabled, isNextDisabled, prev, next } = useNav(
        departDate,
        dispatch,
        prevDate,
        nextDate
    );
    return (
        <div>
            <div className="header-wrapper">
                <Header title={`${from} ⇀ ${to}`} showBack={true} />
            </div>
            <Nav
                date={departDate}
                isPrevDisabled={isPrevDisabled}
                isNextDisabled={isNextDisabled}
                prev={prev}
                next={next}
            />
            <List list={trainList} />
        </div>
    );
}
function mapStateToProps(state) {
    return {
        ...state.get('homeState').toJS(),
        ...state.get('queryState').toJS(),
    };
}
function mapDispatchToProps(dispatch) {
    return { dispatch };
}
export default connect(mapStateToProps, mapDispatchToProps)(Query);
