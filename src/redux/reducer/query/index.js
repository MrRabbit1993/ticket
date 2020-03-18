import { fromJS } from 'immutable';
import * as ActionTypes from '../../constants/query';
const defaultState = fromJS({
    trainList: [],
    orderType: ActionTypes.ORDER_DEPART, //排序
    onlyTickets: false, //显示有票
    ticketTypes: [], //票类型
    checkedTicketTypes: {}, //选择的类型
    trainTypes: [], //车类型
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
    console.log('action', action);
    switch (action.type) {
        // case ActionTypes.ACTION_SET_TRAIN_LIST: //更新车次列表
        // console.log(state.toJS())
        // console.log(action.payload)
        // return state;
        // return state.set('trainList', action.payload);
        // case ActionTypes.ACTION_SET_TICKET_TYPES: //更新车票类型
        //     return state.set('ticketTypes', action.payload);
        // case ActionTypes.ACTION_SET_TRAIN_TYPES: //更新车票类型
        //     return state.set('trainTypes', action.payload);
        // case ActionTypes.ACTION_SET_DEPART_STATIONS: //更新起始站
        //     return state.set('departStations', action.payload);
        case ActionTypes.ACTION_SET_ARRIVE_STATIONS: //更新到达车站
            console.log('执行');
            // state.toJS().arriveStations = action.payload
            // return state.set('arriveStations',fromJS([{value: "南京南", name: "南京南"},{value: "南京", name: "南京"}
            // ]));
            return state.set('arriveStations', 1);
        // return state
        // return state.toJS().arriveStations
        // case ActionTypes.ACTION_SET_TO: //更新终点站
        //     return state.set('to', action.payload);
        // case ActionTypes.ACTION_SET_IS_CITY_SELECTOR_VISIBLE: //打开城市浮层
        //     return state.set('isCitySelectorVisible', action.payload);
        // case ActionTypes.ACTION_SET_CURRENT_SELECTING_LEFT_CITY: //设置左边选择
        //     return state.set('currentSelectingLeftCity', action.payload);
        // case ActionTypes.ACTION_SET_CITY_DATA: //更新城市数组
        //     return state.set('cityData', action.payload);
        // case ActionTypes.ACTION_SET_IS_DATE_SELECTOR_VISIBLE: //打开/关闭时间浮层
        //     return state.set('isDateSelectorVisible', action.payload);
        // case ActionTypes.ACTION_SET_DEPART_DATE: //设置选择其实
        //     return state.set('departDate', action.payload);
        // case ActionTypes.ACTION_SET_HIGH_SPEED: //设置只看高铁动车
        //     return state.set('highSpeed', action.payload);
        default:
            return state;
    }
};
