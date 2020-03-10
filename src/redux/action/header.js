import * as actionTypes from './../constants';
import axios from 'axios';
import { fromJS } from 'immutable';
export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS,
});

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR,
});
const changeList = data => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10),
});
export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER,
});
export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE,
});
export const changePage = page => ({
    type: actionTypes.CHANGE_PAGE,
    page,
});
export const getAsyncList = () => {
    return dispatch => {
        axios
            .get('/json/headerList.json')
            .then(res => {
                const { data } = res.data;
                dispatch(changeList(data));
            })
            .catch(err => console.log(err));
    };
};
