import {
  get_hotel,
  add_hotel,
  isLoading,
  load_api,
  user_interest,
  clear_all,
  add_user,
  final_pay,
  nodemailer_user,
  errors
} from "../actions/action";
import axios from "axios";
import thunk from "redux-thunk";

// main load the api from backend
export const loadapi = () => dispatch => {
  axios
    .get("/rest")
    .then(data => {
      return data;
    })
    .then(data => {
      dispatch({
        type: load_api,
        payload: data.data
      });
    })
    .catch(err => console.log(err));
};

// find requirements as per user needs returns a array
// ass matched fiels from the api to the user_interest array
export const gethotel = user_interests => {
  return {
    type: get_hotel,
    payload: user_interests
  };
};

// add if user clicks the add hotel to his interests
export const userInterest = data => {
  return {
    type: user_interest,
    payload: data
  };
};

export const clearAll = () => {
  const reuse = { user_matched_hotels: [], user_interest: [], final_pay: {} };
  return {
    type: clear_all,
    payload: reuse
  };
};

// make payment using razorpay

// finall step to add hotel to payment in database for the company standards
export const addhotel = ({ hotel_name, hotel_price }) => dispatch => {
  const item = { hotel_name, hotel_price };
  axios
    .post("/rest/api", item)
    .then(res => {
      dispatch({
        type: add_hotel,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(errorHandle(err));
      console.log(err.code);
    });
};

export const addUser = ({ name, email }) => {
  const data = { name, email };
  return {
    type: add_user,
    payload: data
  };
};

// nodemailer post actiuon
export const nodemailerUser = ({ name, email }) => dispatch => {
  const data = { name, email };
  axios
    .post("/payments", { data })
    .then(data => {
      dispatch({
        type: nodemailer_user,
        payload: data.data
      });
    })
    .catch(err => {
      dispatch(errorHandle(err));
      console.log(err.code);
    });
};

export const finalPay = room => {
  console.log("final pay is called");
  return {
    type: final_pay,
    payload: room
  };
};

export const isLoad = () => {
  return {
    type: isLoading
  };
};

export const errorHandle = error_backend => {
  return {
    type: errors,
    payload: error_backend
  };
};
