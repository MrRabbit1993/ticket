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
    switch (action.type) {
        case ActionTypes.ACTION_SET_FROM:
            return state.set('from', action.payload);
        case ActionTypes.ACTION_SET_TO:
            return state.set('to', action.payload);
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
