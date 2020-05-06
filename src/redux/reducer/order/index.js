import * as ActionTypes from '../../constants/order';
import { fromJS } from 'immutable';
const defaultState = fromJS({
    departDate: Date.now(),
    arriveDate: Date.now(),
    departTimeStr: null,
    arriveTimeStr: null,
    durationStr: null,
    price: null,
    passengers: [],
    menu: null,
    isMenuVisible: false,
    searchParsed: false
});
export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.ACTION_SET_SEARCH_PARSED: //解析拦截
            return state.set('searchParsed', action.payload);
        case ActionTypes.ACTION_SET_DEPART_TIME_STR: //设置出发时间
            return state.set('departTimeStr', action.payload);
        case ActionTypes.ACTION_SET_ARRIVE_TIME_STR: //设置到达时间
            return state.set('arriveTimeStr', action.payload);
        case ActionTypes.ACTION_SET_ARRIVE_DATE: //设置到达日期
            return state.set('arriveDate', action.payload);
        case ActionTypes.ACTION_SET_DURATION_STR: //设置运行时间
            return state.set('durationStr', action.payload);
        case ActionTypes.ACTION_SET_PRICE: //设置价格
            return state.set('price', action.payload);
        case ActionTypes.ACTION_SET_PASSENGERS: //增加成人乘客
            return state.set('passengers', action.payload);
        default:
            return state;
    }
};
