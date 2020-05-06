import * as ActionTypes from '../../constants/home';
import { fromJS } from 'immutable';
const defaultState = fromJS({
    from: '北京',
    to: '成都',
    isCitySelectorVisible: false,
    currentSelectingLeftCity: false,
    cityData: null,
    isLoadingCityData: false,
    isDateSelectorVisible: false,
    departDate: Date.now(),
    highSpeed: false
});
export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.ACTION_SET_FROM: //更新起始站
            return state.set('from', action.payload);
        case ActionTypes.ACTION_SET_TO: //更新终点站
            return state.set('to', action.payload);
        case ActionTypes.ACTION_SET_IS_CITY_SELECTOR_VISIBLE: //打开城市浮层
            return state.set('isCitySelectorVisible', action.payload);
        case ActionTypes.ACTION_SET_CURRENT_SELECTING_LEFT_CITY: //设置左边选择
            return state.set('currentSelectingLeftCity', action.payload);
        case ActionTypes.ACTION_SET_CITY_DATA: //更新城市数组
            return state.set('cityData', action.payload);
        case ActionTypes.ACTION_SET_IS_DATE_SELECTOR_VISIBLE: //打开/关闭时间浮层
            return state.set('isDateSelectorVisible', action.payload);
        case ActionTypes.ACTION_SET_DEPART_DATE: //设置选择其实
            return state.set('departDate', action.payload);
        case ActionTypes.ACTION_SET_HIGH_SPEED: //设置只看高铁动车
            return state.set('highSpeed', action.payload);
        default:
            return state;
    }
};
