import {combineReducers }from 'redux';
import { connectRouter } from 'connected-react-router';

import personReducer from './personReducer'
import errorReducer from './errorReducer'
import authReducer from './authReducer'

const createRooteReducer = (history)=> combineReducers({
    persons:personReducer,
    error:errorReducer,
    auth:authReducer,
    router:connectRouter(history)
})
export default createRooteReducer;