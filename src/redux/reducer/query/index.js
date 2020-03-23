import { fromJS } from 'immutable';
import * as ActionTypes from '../../constants/query';
const defaultState = fromJS({
    trainList: [],
    orderType: ActionTypes.ORDER_DEPART, //排序
    onlyTickets: false, //显示有票
    ticketTypes: [], //票类型
    checkedTicketTypes: {}, //选择的类型
    trainTypes: null, //车类型
    checkedTrainTypes: {},
    departStations: [], //出发车站
    checkedDepartStations: {}, //选中的车站
    arriveStations: [], //到达车站
    checkedArriveStations: {}, //选中的达到车站
    departTimeStart: 0, //出发开始时间
    departTimeEnd: 24, //出发截止时间
    arriveTimeStart: 0, //到达开始时间
    arriveTimeEnd: 24, //到达截止时间
    isFiltersVisible: false, //浮层
    searchParsed: false,
});

export default (state = defaultState, action) => {
    // console.log("action",action)
    switch (action.type) {
        case ActionTypes.ACTION_SET_SEARCH_PARSED: //请求完成
            return state.set('searchParsed', action.payload);
        case ActionTypes.ACTION_SET_IS_FILTERS_VISIBLE: //更新浮层
            return state.set('isFiltersVisible', action.payload);
        case ActionTypes.ACTION_SET_TRAIN_LIST: //更新车次列表
            return state.set('trainList', action.payload);
        case ActionTypes.ACTION_SET_TICKET_TYPES: //更新车票类型
            return state.set('ticketTypes', action.payload);
        // case ActionTypes.ACTION_SET_TRAIN_TYPES: //更新车票类型
        //     return state.set('trainTypes', action.payload);
        // case ActionTypes.ACTION_SET_DEPART_STATIONS: //更新起始站
        //     return state.set('departStations', action.payload);
        case ActionTypes.ACTION_SET_ARRIVE_STATIONS: //更新到达车站
            return state.set('arriveStations', fromJS(action.payload));
        default:
            return state;
    }
};
