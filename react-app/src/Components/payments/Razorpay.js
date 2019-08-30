import React, { Component } from "react";
import { makeStyles, Button, Link } from "@material-ui/core";
import StripeCheckout from "react-stripe-checkout";
import PropTypes from "prop-types";

// redux stuff
import { connect } from "react-redux";
import { makePayment } from "../../actions/paymentaction";
import { clearAll } from "../../actions/act";
import { toast } from "react-toastify";
import Razor from "./Success";
import Spinner from "react-spinner-material";

// css
import "../../App.css";
// razorpay stuff
import {
  api_key_id,
  api_secret,
  razorpay_id
} from "../../confidential_info/razorpay_config";
import Success from "./SucessMain";

// components

class Razorpay extends React.Component {
  // default values in state
  constructor() {
    super();
    this.state = {
      bool: false
    };
    this.pay = this.pay.bind(this);
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }

  tokenUser = (token, addresses) => {
    const { name, price } = this.props.user_hotels.final_pay.fields;
    const payments = { name, price };
    this.props.makePayment(token, payments);
  };
  pay(e) {
    e.preventDefault();
    const data = this.props.user_hotels.final_pay;
    const room_details = data.fields;
    const current_user = this.props.status_reducer.users;
    let ids;
    let options = {
      key: razorpay_id,
      amount: room_details.price * 100, // 2000 paise = INR 20, amount in paisa
      name: current_user[0].name,
      description: "ordered Items",
      image:
        "https://media.licdn.com/dms/image/C4E0BAQE19TrEXW022w/company-logo_200_200/0?e=2159024400&v=beta&t=KSA1haVf2zqXDG5scvlmrXltTNA3MkkLLQpolQrTBTU",

      handler: response => {
        const id = response.razorpay_payment_id;
        ids = id;
        this.setState({
          bool: true
        });
      },
      prefill: {
        name: current_user[0].name,
        email: current_user[0].email
      },
      notes: {
        address: "Room Payments"
      },
      theme: {
        color: "#4d59f7"
      }
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
  }
  render() {
    const data = this.props.user_hotels.final_pay;
    const room_details = data.fields;
    const success_rate = this.props.status_reducer.sucessfull_payments;
    const current_user = this.props.status_reducer.users;
    if (success_rate.length > 0) {
      // add user to the database now using a post request here
      const main = current_user[0];
      return (
        <div className="container">
          <div className="content">
            <Success />
          </div>
        </div>
      );
    }
    if (this.state.bool) {
      return (
        <div>
          <span>
            <Razor />
          </span>
        </div>
      );
    }

    const offer_price = Math.random();
    if (room_details) {
      return (
        <div>
          <div className="container">
            <span className="alert alert-secondary text-warning">
              Payment goes Here
            </span>
          </div>
          <div className="main-container">
            <div class="row py-5 p-4 bg-white rounded shadow-sm">
              <div className="col-lg-6">
                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                  Coupon code
                </div>
                <div className="p-4">
                  <p className="font-italic mb-4">
                    If you have a coupon code, please enter it in the box below
                  </p>
                  <div className="input-group mb-4 border rounded-pill p-2">
                    <input
                      type="text"
                      placeholder="Apply coupon"
                      aria-describedby="button-addon3"
                      className="form-control border-0"
                    />
                    <div className="input-group-append border-0">
                      <button
                        id="button-addon3"
                        type="button"
                        className="btn btn-dark px-4 rounded-pill"
                      >
                        <i className="fa fa-gift mr-2" />
                        Apply coupon
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                  Any other queries
                </div>
                <div className="p-4">
                  <p className="font-italic mb-4">
                    If you want any more info contact us
                  </p>
                  <textarea
                    name=""
                    cols="30"
                    rows="2"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                  Order summary{" "}
                </div>
                <div className="p-4">
                  <p className="font-italic mb-4">
                    All charges are standard required charges include service
                    charge and maintainence cost
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Order Subtotal </strong>
                      <strong>{room_details.price}</strong>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">
                        <button
                          type="button"
                          className="btn btn-info btn-lg"
                          data-toggle="modal"
                          data-target="#myModal"
                          className="btn btn-danger"
                        >
                          Tax Details
                        </button>
                        <div id="myModal" className="modal fade" role="dialog">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <button
                                  type="button"
                                  className="close float-right"
                                  data-dismiss="modal"
                                >
                                  &times;
                                </button>
                              </div>
                              <div className="modal-body">
                                <span>
                                  <div class="tabla" id="tabla">
                                    <table class="table table-striped">
                                      <thead>
                                        <tr>
                                          <th>#</th>
                                          <th>
                                            Realised amount per room/person per
                                            night
                                          </th>
                                          <th> GST Rates</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <th>1</th>
                                          <td>Less than Rs.1,000</td>
                                          <td> 0%</td>
                                        </tr>
                                        <tr>
                                          <th>2</th>
                                          <td>Rs.1,000 – Rs.2,499</td>
                                          <td>12%</td>
                                        </tr>
                                        <tr>
                                          <th>3</th>
                                          <td>Rs.2,500 – Rs.7,499</td>
                                          <td> 18%</td>
                                        </tr>
                                        <tr>
                                          <th>4</th>
                                          <td>Rs.7,500 and above</td>
                                          <td>28%</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </span>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-default"
                                  data-dismiss="modal"
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </strong>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">
                        Tax on by your Order
                      </strong>
                      <strong>
                        {room_details.price > 1000
                          ? room_details * 0.18
                          : room_details.price}
                      </strong>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Other Charges</strong>
                      <strong>Rs 0.00</strong>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Total</strong>
                      <h5 className="font-weight-bold">
                        Rs ${room_details.price}
                      </h5>
                    </li>
                  </ul>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-6 col-m-6 col-lg-6">
                        <span>
                          {/* return a token for every proper email genrated and email address */}
                          <StripeCheckout
                            stripeKey={api_key_id}
                            StripeCheckout={api_secret}
                            token={this.tokenUser.bind(this)}
                            amount={room_details.price * 100}
                            name={"Room Payments"}
                          />
                        </span>
                      </div>
                      <div>
                        <div className="col-sm-6 col-m-6 col-lg-6">
                          <span>
                            {/* return a token for every proper email genrated and email address */}
                            <Button
                              variant="h2"
                              color="secondary"
                              onClick={this.pay}
                            >
                              Pay now
                            </Button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <Spinner
            size={50}
            spinnerColor={"#DF3612"}
            visible={true}
            style={{ display: "flex", justifyContent: "center" }}
          />
        </div>
      );
    }
  }
}

Razorpay.propTypes = {
  status_reducer: PropTypes.object.isRequired,
  user_hotels: PropTypes.object.isRequired,
  makePayment: PropTypes.func.isRequired,
  clearAll: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  status_reducer: state.status_reducer,
  user_hotels: state.user_hotels
});

export default connect(
  mapStateToProps,
  { makePayment, clearAll }
)(Razorpay);
