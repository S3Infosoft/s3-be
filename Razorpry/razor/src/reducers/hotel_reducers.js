import {add_hotel, isLoading, get_hotel,load_api,user_interest} from '../actions/action';
import thunk from 'redux-thunk';
// reducer
// get hotel is filter from api store in db user_hotel:user needs
const initialState = {user_hotels:[],main_api:[],loading:false,user_interest:[]}
const middleware  = [thunk];
export default function(state = initialState ,action){
    switch(action.type){
        case load_api:
            return{
                ...state,
                main_api:action.payload
            }
            // get user requirement hotels
        case get_hotel:
            return{
                ...state,
                user_hotels:action.payload
            }
        // push to database once he confirms the order for that hotel
        case add_hotel:
                return{
                    ...state,
                    user_hotels:[action.payload,...state.user_hotels]
            }
        case isLoading:
            return{
                ...state,
                loading:!state.loading 
            }
        case user_interest:
            return{
                ...state,
                user_interest:[action.payload,...state.user_interest]
            }
        default:
            return state;        
    }
}