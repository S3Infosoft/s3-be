import thunk from "redux-thunk";
import { combineReducers } from "redux";
import hotel_reducer from "./hotel_reducer";
import status_reducer from "./status";

export default combineReducers({
  user_hotels: hotel_reducer,
  status_reducer: status_reducer
});
