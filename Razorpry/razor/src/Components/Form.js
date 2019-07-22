import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, TextField } from "@material-ui/core";

import Display from "./Display";

// configure calendar
import Datepicker from "react-datepicker";
import Spinner from "react-spinner-material";
import Down from "./Cards";

// redux
import PropTypes, { element } from "prop-types";
import { connect } from "react-redux";
import { gethotel, addhotel, loadapi } from "../actions/act";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      hotel_name: "",
      hotel_price: 0,
      startDate: Date.now(),
      bool: false,
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.calendarchange = this.calendarchange.bind(this);
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  calendarchange(date) {
    this.setState({
      startDate: date
    });
  }
  submit(e) {
    e.preventDefault();
    const { hotel_name, hotel_price, startDate } = this.state;
    const data = { hotel_name, hotel_price, startDate };
    const final = this.props.user_hotels.main_api;
    // set the filtered array as per user request to hotel and add filtered one to redux store
    const arr = final.filter(element => {
      return element.id >= 1 && element.id <= 10;
    });
    this.props.gethotel(arr);
    this.setState({
      bool: true
    });
  }
  render() {
    const { bool } = this.state;
    const main_api = this.props.user_hotels.main_api;
    const user_form = (
      <div>
        <Paper className="Paper">
          <Typography className="Typography">
            <form onSubmit={this.submit}>
              <TextField
                type="text"
                name="hotel_name"
                onChange={this.handleChange}
              />
              <TextField
                type="text"
                name="hotel_price"
                onChange={this.handleChange}
              />
              <button>Get available hotels</button>
              <br />
              <br />
              <Datepicker
                selected={this.state.startDate}
                onChange={this.calendarchange}
              />
            </form>
          </Typography>
        </Paper>
        <Down />
      </div>
    );
    if (main_api.length > 0) {
      return (
        <div>
          {!bool ? (
            user_form
          ) : (
            <div>
              {user_form}
              <Display user_interest={this.props.user_hotels.main_api} />
            </div>
          )}
        </div>
      );
    } else {
      return (
        <Spinner
          size={120}
          spinnerColor={"#DF3612"}
          visible={true}
          style={{ display: "flex", justifyContent: "center" }}
        />
      );
    }
  }
}

Form.propTypes = {
  gethotel: PropTypes.func.isRequired,
  user_hotels: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  user_hotels: state.user_hotels
});

export default connect(
  mapStatetoProps,
  { gethotel }
)(Form);
