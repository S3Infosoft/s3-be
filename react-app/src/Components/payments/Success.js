import React, { Component } from "react";

// redux now
import { dbUser, clearPayments } from "../../actions/paymentaction";
import { clearAll } from "../../actions/act";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { makePayment } from "../../actions/paymentaction";

// material ui
import { makeStyles, Button } from "@material-ui/core";

// react router dom
import { Link, Switch } from "react-router-dom";
class Success extends Component {
  componentDidMount() {
    console.log("now starting post in db");
    const data = this.props.user_hotels.final_pay;
    const current_user = this.props.status_reducer.users;
    const success_rate = this.props.status_reducer.sucessfull_payments;
    this.props.dbUser(data, current_user);
  }
  render() {
    return (
      <div>
        <span>Hello thank you for placing a order with us</span>
        <Button
          color="primary"
          variant="h2"
          onClick={() => {
            this.props.clearAll();
            this.props.clearPayments();
          }}
        >
          <Link to="/order_place">View Rooms again</Link>
        </Button>
      </div>
    );
  }
}

Success.propTypes = {
  status_reducer: PropTypes.object.isRequired,
  user_hotels: PropTypes.object.isRequired,
  clearAll: PropTypes.func.isRequired,
  dbUser: PropTypes.func.isRequired,
  clearPayments: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  status_reducer: state.status_reducer,
  user_hotels: state.user_hotels
});
export default connect(
  mapStateToProps,
  { dbUser, clearAll, clearPayments }
)(Success);
