import React, { Component } from "react";
//components
import FinalOrder from "./FinalOrder";
import FormON from "./Form_on";
import Navbar from "./navbar";
import HotDeals from "./HotDeals";
import Razorpay from "./payments/Razorpay";

import PropTypes, { element } from "prop-types";
// redux
import { connect } from "react-redux";
import { loadapi } from "../actions/act";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

// css stuff
import "../Buttons.css";
class home extends Component {
  componentDidMount() {
    this.props.loadapi();
  }
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <div className="mains">
            <Link to="/order_place" id="first">
              Place An Order
            </Link>
            <Link to="/" id="first">
              View Best Rooms
            </Link>
          </div>
          <Route exact path="/" component={HotDeals} />
          <Route exact path="/order_place" component={FormON} />
          <Route exact path="/final_place" component={FinalOrder} />
          <Route exact path="/pay_now" component={Razorpay} />
        </Router>
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  user_hotels: state.user_hotels,
  isLoading: state.isLoading
});

home.propTypes = {
  loadapi: PropTypes.func.isRequired,
  user_hotels: PropTypes.object.isRequired
};

export default connect(
  mapStatetoProps,
  { loadapi }
)(home);
