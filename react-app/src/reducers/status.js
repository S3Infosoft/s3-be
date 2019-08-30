import thunk from "redux-thunk";
import {
  add_user,
  pay_now,
  db_user,
  clear_payments,
  nodemailer_user
} from "../actions/action";

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
    case db_user:
      return {
        ...state
      };
    case clear_payments:
      return {
        ...state,
        users: [],
        sucessfull_payments: []
      };
    case nodemailer_user:
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
}
