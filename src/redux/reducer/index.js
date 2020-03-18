// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';

import indexReducer from './home/index';
import queryReducer from './query/index';
const reducer = combineReducers({
    homeState: indexReducer,
    queryState: queryReducer,
});
export default reducer;
