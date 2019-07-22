import thunk from "redux-thunk";
import { combineReducers } from "redux";
import hotel_reducer from "./hotel_reducer";

export default combineReducers({
  user_hotels: hotel_reducer
});
