import { pay_now } from "./action";
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
