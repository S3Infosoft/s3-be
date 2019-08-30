import { errors } from "../actions/action";
const initialState = { errors: [] };
export default function(state = initialState, action) {
  switch (action.type) {
    case errors:
      return {
        errors: [...state.errors, action.payload]
      };
    default:
      return {
        ...state
      };
  }
}
