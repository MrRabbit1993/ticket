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
    highSpeed: false,
});
export default (state = defaultState, action) => {
    console.log(action);
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
        // case ActionTypes.CHANGE_LIST:
        //     return state.merge({
        //         list: action.data,
        //         totalPage: action.totalPage,
        //     });
        // case ActionTypes.MOUSE_ENTER:
        //     return state.set('mouseIn', true);
        // case ActionTypes.MOUSE_LEAVE:
        //     return state.set('mouseIn', false);
        // case ActionTypes.CHANGE_PAGE:
        //     return state.set('page', action.page);
        default:
            return state;
    }
};
