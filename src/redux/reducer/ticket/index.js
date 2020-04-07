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
    searchParsed: false,
});

export default (state = defaultState, action) => {
    console.log('action', action);
    switch (action.type) {
        case ActionTypes.ACTION_SET_DEPART_STATION: //出发车站
            return state.set('departStation', action.payload);
        case ActionTypes.ACTION_SET_ARRIVE_STATION: //到达车站
            return state.set('arriveStation', action.payload);
        case ActionTypes.ACTION_SET_TRAIN_NUMBER: //车次
            return state.set('trainNumber', action.payload);
        case ActionTypes.ACTION_SET_DEPART_DATE: //出发日期
            return state.set('departDate', action.payload);
        // case ActionTypes.ACTION_SET_ORDER_TYPE: //更排序
        //     return state.set('orderType', action.payload);
        // case ActionTypes.ACTION_SET_ONLY_TICKETS: //只看又票
        //     return state.set('onlyTickets', action.payload);
        // case ActionTypes.ACTION_SET_DEPART_STATIONS: //更新出发车站
        //     return state.set('departStations', action.payload);
        // case ActionTypes.ACTION_SET_ARRIVE_STATIONS: //更新到达车站
        //     return state.set('arriveStations', action.payload);
        // case ActionTypes.ACTION_SET_TRAIN_TYPES: //更新车次类型
        //     return state.set('trainTypes', action.payload);
        // case ActionTypes.ACTION_SET_CHECKED_TICKET_TYPES: //设置选择的坐席
        //     return state.set('checkedTicketTypes', action.payload);
        // case ActionTypes.ACTION_SET_CHECKED_TRAIN_TYPES: //设置选择的车次类型
        //     return state.set('checkedTrainTypes', action.payload);
        // case ActionTypes.ACTION_SET_CHECKED_DEPART_STATIONS: //设置选择的出发车站
        //     return state.set('checkedDepartStations', action.payload);
        // case ActionTypes.ACTION_SET_CHECKED_ARRIVE_STATIONS: //设置选择的到达车站
        //     return state.set('checkedArriveStations', action.payload);
        // case ActionTypes.ACTION_SET_DEPART_TIME_START: //设置选择的出发开始时间
        //     return state.set('departTimeStart', action.payload);
        // case ActionTypes.ACTION_SET_DEPART_TIME_END: //设置选择的出发结束时间
        //     return state.set('departTimeEnd', action.payload);
        // case ActionTypes.ACTION_SET_ARRIVE_TIME_START: //设置到达的开始时间
        //     return state.set('arriveTimeStart', action.payload);
        // case ActionTypes.ACTION_SET_ARRIVE_TIME_END: //设置到达的结束时间
        //     return state.set('arriveTimeEnd', action.payload);
        default:
            return state;
    }
};
