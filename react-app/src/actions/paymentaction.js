import { pay_now, db_user, clear_payments } from "./action";
import axios from "axios";

export const makePayment = (token, { name, price }) => dispatch => {
  const product = { name, price };
  axios
    .post("/payments/checkout", { token, product })
    .then(data => {
      localStorage.setItem("token", token);
      dispatch({
        type: pay_now,
        payload: data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const dbUser = (data, current_user) => dispatch => {
  console.log(data);
  console.log(current_user);
  const user = current_user[0];
  const final_data = {
    room_name: data.fields.name,
    room_price: data.fields.price,
    room_type: data.fields.slug
  };
  localStorage.setItem("roomname", data.fields.name);
  console.log("the user data posted" + localStorage.getItem("roomname"));
  axios
    .post("/rest/api", { final_data, user })
    .then(data => {
      localStorage.setItem("current_user", current_user);
      dispatch({
        type: db_user,
        payload: data.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const clearPayments = () => {
  return {
    type: clear_payments
  };
};
