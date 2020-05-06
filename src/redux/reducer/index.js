// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';

import indexReducer from './home/index';
import queryReducer from './query/index';
import ticketReducer from './ticket/index';
import orderReducer from './order/index';
const reducer = combineReducers({
    homeState: indexReducer,
    queryState: queryReducer,
    ticketState: ticketReducer,
    orderState: orderReducer,
});
export default reducer;
