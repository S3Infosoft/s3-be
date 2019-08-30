import React, { Component } from "react";
import PropTypes from "prop-types";

// database connectivity now
import { connect } from "react-redux";
import { makeStyles, Button } from "@material-ui/core";
import { dbUser, clearPayments } from "../../actions/paymentaction";
import { clearAll } from "../../actions/act";

// react router dom
import { Link } from "react-router-dom";

class SucessMain extends Component {
  componentDidMount() {
    const data = this.props.user_hotels.final_pay;
    const current_user = this.props.status_reducer.users;
    const success_rate = this.props.status_reducer.sucessfull_payments;
    console.log(success_rate[0].status);
    if (success_rate[0].status == "success") {
      this.props.dbUser(data, current_user);
    }
  }
  render() {
    const success = this.props.status_reducer.sucessfull_payments[0].status;
    if (success === "success") {
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
    } else {
      return (
        <div>
          <span>please Try agin there was an error in transaction</span>
          <Button color="secondary" variant="h2">
            <Link to="/order_place">Pay again</Link>
          </Button>
        </div>
      );
    }
  }
}

SucessMain.propTypes = {
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
)(SucessMain);
