import * as actionTypes from './../constants';
import axios from 'axios';
import { fromJS } from 'immutable';
const changeHomeData = data => ({
    type: actionTypes.CHANGE_HOME_DATA,
    data,
});
const addHomeList = (data, nextPage) => ({
    type: actionTypes.ADD_HOME_LIST,
    data: fromJS(data),
    nextPage,
});
const toggleTopShow = bool => ({
    type: actionTypes.TOGGLE_TOP_SHOW,
    bool,
});
export const getHomeInfo = () => {
    return dispatch => {
        axios.get('/json/home.json').then(res => {
            const response = res.data.data;
            dispatch(changeHomeData(response));
        });
    };
};
export const loadMore = page => {
    return dispatch => {
        axios.get(`/json/homeList.json?page=${page}`).then(res => {
            const response = res.data.data;
            dispatch(addHomeList(response, page + 1));
        });
    };
};
export const scoll = e => {
    return dispatch => {
        if (document.documentElement.scrollTop > 80) {
            dispatch(toggleTopShow(true));
        } else {
            dispatch(toggleTopShow(false));
        }
    };
};
