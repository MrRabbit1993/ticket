import { fromJS } from 'immutable';
import * as ActionTypes from '../../constants/tticket';
const defaultState = fromJS({
    departDate: Date.now(), //出发日期
    arriveDate: Date.now(), //到达日期
    departTimeStr: null, //出发时间
    arriveTimeStr: null, //到达时间
    departStation: null, //出发车站
    arriveStation: null, //到达车站
    trainNumber: null, //车次
    durationStr: null,
    tickets: [],
    isScheduleVisible: false, //浮层
    searchParsed: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.ACTION_SET_DEPART_STATION: //出发车站
            return state.set('departStation', action.payload);
        case ActionTypes.ACTION_SET_ARRIVE_STATION: //到达车站
            return state.set('arriveStation', action.payload);
        case ActionTypes.ACTION_SET_TRAIN_NUMBER: //车次
            return state.set('trainNumber', action.payload);
        case ActionTypes.ACTION_SET_DEPART_DATE: //出发日期
            return state.set('departDate', action.payload);
        case ActionTypes.ACTION_SET_ARRIVE_DATE: //到达站日期
            return state.set('arriveDate', action.payload);
        case ActionTypes.ACTION_SET_SEARCH_PARSED: //解析flag
            return state.set('searchParsed', action.payload);
        case ActionTypes.ACTION_SET_DEPART_TIME_STR: //起始站时分
            return state.set('departTimeStr', action.payload);
        case ActionTypes.ACTION_SET_ARRIVE_TIME_STR: //到达站时分
            return state.set('arriveTimeStr', action.payload);
        case ActionTypes.ACTION_SET_DURATION_STR: //耗时
            return state.set('durationStr', action.payload);
        case ActionTypes.ACTION_SET_IS_SCHEDULE_VISIBLE: //浮层
            return state.set('isScheduleVisible', action.payload);
        case ActionTypes.ACTION_SET_TICKETS: //座位票
            return state.set('tickets', action.payload);
        default:
            return state;
    }
};
