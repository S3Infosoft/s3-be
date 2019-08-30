import {
  add_hotel,
  isLoading,
  get_hotel,
  load_api,
  clear_all,
  user_interest,
  final_pay
} from "../actions/action";
import thunk from "redux-thunk";
// reducer
// get hotel is filter from api store in db user_hotel:user needs
const initialState = {
  user_matched_hotels: [],
  main_api: [],
  loading: false,
  user_interest: [],
  final_pay: {}
};
const middleware = [thunk];
export default function(state = initialState, action) {
  switch (action.type) {
    case load_api:
      return {
        ...state,
        main_api: action.payload
      };
    // get user requirement hotels
    case get_hotel:
      return {
        ...state,
        user_matched_hotels: action.payload
      };
    // push to database once he confirms the order for that hotel
    case add_hotel:
      return {
        ...state,
        user_hotels: [action.payload, ...state.user_hotels]
      };
    case isLoading:
      return {
        ...state,
        loading: !state.loading
      };
    case user_interest:
      return {
        ...state,
        user_interest: [action.payload, ...state.user_interest]
      };
    case final_pay:
      return {
        ...state,
        final_pay: action.payload
      };
    case clear_all:
      return {
        ...state,
        user_interest: action.payload.user_interest,
        user_matched_hotels: action.payload.user_matched_hotels,
        final_pay: action.payload.final_pay
      };

    default:
      return state;
  }
}
