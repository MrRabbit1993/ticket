// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';

import indexReducer from './home/index';
const reducer = combineReducers({
    homeState: indexReducer,
});
export default reducer;
