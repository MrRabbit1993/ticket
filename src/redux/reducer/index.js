import { combineReducers } from 'redux';

import indexReducer from './index/index';
const reducer = combineReducers({
    indexReducer,
});
export default reducer;
