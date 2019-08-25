import thunk from "redux-thunk";
import { add_user, pay_now } from "../actions/action";

const initialState = { users: [], sucessfull_payments: [] };

export default function(state = initialState, action) {
  switch (action.type) {
    case add_user:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case pay_now:
      return {
        ...state,
        sucessfull_payments: [...state.sucessfull_payments, action.payload]
      };

    default:
      return {
        ...state
      };
  }
}
