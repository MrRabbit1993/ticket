import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import styles from './index.module.less';
import { h0 } from '@/units/fp.js';
import useNav from '@/common/customHooks/useNav';
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import {
    setDepartStation,
    setArriveStation,
    setTrainNumber,
    setDepartDate,
    prevDate,
    nextDate,
} from '@/redux/action/ticket';
function Index(props) {
    const {
        match,
        departDate, //出发日期
        arriveDate, //到达日期
        departTimeStr, //出发时间
        arriveTimeStr, //到达时间
        departStation, //出发车站
        arriveStation, //到达车站
        durationStr,
        tickets,
        isScheduleVisible, //浮层
        searchParsed,
        dispatch,
    } = props;
    const { dStation, aStation, trainNumber, date } = match.params;
    //构建store
    useEffect(() => {
        dispatch(setDepartStation(dStation)); //设置出发车站
        dispatch(setArriveStation(aStation)); //设置到达车站
        dispatch(setTrainNumber(trainNumber)); //设置车次
        dispatch(setDepartDate(h0(dayjs(date)).valueOf())); //设置出发日期
        // dispatch(setSearchParsed(true));
    }, [aStation, dStation, date, dispatch, trainNumber]);
    //导航条数据
    const { isPrevDisabled, isNextDisabled, prev, next } = useNav(
        departDate,
        dispatch,
        prevDate,
        nextDate
    );
    //设置title
    useEffect(() => {
        document.title = trainNumber;
    }, [trainNumber]);
    return (
        <div className={styles['ticket-container']}>
            <div className={styles['header-wrapper']}>
                <Header title={trainNumber} showBack={true} />
            </div>
            <div className={styles['content-container']}>
                <div className={styles['nav-wrapper']}>
                    <Nav
                        date={departDate}
                        isPrevDisabled={isPrevDisabled}
                        isNextDisabled={isNextDisabled}
                        prev={prev}
                        next={next}
                    />
                    {/*<div className="detail-wrapper">
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
                        <span className="left"></span>
                        <span
                            className="schedule"
                            onClick={() =>
                                detailCallBacks.toggleIsScheduleVisible()
                            }
                        >
                            时刻表
                        </span>
                        <span className="right"></span>
                    </Detail>
                </div>
                <TrainContext.Provider
                    value={{
                        trainNumber,
                        departStation,
                        arriveStation,
                        departDate,
                    }}
                >
                    <Candidate tickets={tickets} />
                </TrainContext.Provider>
                {isScheduleVisible && (
                    <div
                        className="mask"
                        onClick={() => dispatch(toggleIsScheduleVisible())}
                    >
                        <Suspense fallback={<div>loading</div>}>
                            <Schedule
                                date={departDate}
                                trainNumber={trainNumber}
                                departStation={departStation}
                                arriveStation={arriveStation}
                            />
                        </Suspense>
                    </div>
                )}*/}
                </div>
            </div>
        </div>
    );
}
function mapStateToProps(state) {
    return state.get('ticketStatue').toJS();
}
function mapDispatchToProps(dispatch) {
    return { dispatch };
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);
