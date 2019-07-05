import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import hotel_reducers from './hotel_reducers'

export default combineReducers({
    user_hotels:hotel_reducers
})