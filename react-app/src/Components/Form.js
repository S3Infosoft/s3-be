import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, TextField } from "@material-ui/core";
import { Bar, Line, Pie } from "react-chartjs-2";

import Display from "./Display";

// configure calendar
import Datepicker from "react-datepicker";
import Spinner from "react-spinner-material";

// redux
import PropTypes, { element } from "prop-types";
import { connect } from "react-redux";
import { gethotel, addhotel, loadapi } from "../actions/act";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      room_preferences: "Single Rooms",
      room_type: "Economy Rooms",
      price: 0,
      startDate: "",
      endDate: "",
      bool: false,
      errors: {},
      chartData: {
        labels: ["Room Economy", "Room Basic", "Room Standard", "Room Deluxe"],
        datasets: [
          {
            label: "Available Rooms",
            data: [4, 4, 4, 4],
            backgroundColor: [
              "rgba(255,255,255,0.2)",
              "rgba(255,125,50,0.2)",
              "rgba(255,55,5,0.4)",
              "rgba(255,25,205,0.6)"
            ]
          }
        ]
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.setvalue = this.setvalue.bind(this);
    this.calendarStartchange = this.calendarStartchange.bind(this);
    this.calendarEndchange = this.calendarEndchange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  calendarStartchange(date) {
    this.setState({
      startDate: date
    });
  }
  calendarEndchange(date) {
    this.setState({
      endDate: date
    });
  }
  setvalue(e) {
    this.setState({
      price: e.target.value
    });
  }
  submit(e) {
    e.preventDefault();
    const { room_preferences, room_type } = this.state;
    // simple validation
    if (room_preferences.length === 0 && room_type.length === 0) {
      const err = { status: "the fields are required" };
      this.setState({
        errors: err
      });
      alert(err.status);
    } else {
      this.setState({ errors: {} });
      const { hotel_name, hotel_price, startDate } = this.state;
      const data = { hotel_name, hotel_price, startDate };
      const final = this.props.user_hotels.main_api;

      // compute for search
      const str = this.state.room_preferences
        .replace(" Rooms", "")
        .trim()
        .toLocaleLowerCase();
      const type = this.state.room_type
        .replace(" Rooms", "")
        .trim()
        .toLocaleLowerCase();
      console.log(`${str} ${type}`);
      // set the filtered array as per user request to hotel and add filtered one to redux store
      const arr = final.filter(element => {
        return (
          element.fields.price <= this.state.price &&
          element.fields.name == `${str} ${type}`
        );
      });
      this.props.gethotel(arr);
      this.setState({
        bool: true
      });
      console.log(arr);
    }
  }

  render() {
    const { bool } = this.state;
    const main_api = this.props.user_hotels.main_api;
    const user_form = (
      <div className="container mt-3" style={{ height: "100%" }}>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xl-6" id="content">
            <div className="form-group">
              <Paper className="Paper">
                <Typography className="Typography">
                  <form onSubmit={this.submit}>
                    <label className="form-label">Hotel Name</label>
                    <input
                      value="Annonymus Restaurent"
                      disabled
                      type="text"
                      label="Room_type"
                      name="hotel_name"
                      placeholder="Room Type"
                      onChange={this.handleChange}
                      className="form-control w-100"
                    />
                    <label htmlFor="RoomPrice">Room Preferences</label>
                    <div class="form-group">
                      <select
                        class="form-control"
                        name="room_preferences"
                        id="exampleFormControlSelect1"
                        value={this.state.room_preferences}
                        onChange={this.handleChange}
                      >
                        <option>Single Rooms</option>
                        <option>Double Rooms</option>
                        <option>Family Rooms</option>
                      </select>
                      <label htmlFor="RoomPrice">Room Types</label>
                      <select
                        class="form-control"
                        name="room_type"
                        id="exampleFormControlSelect1"
                        value={this.state.room_type}
                        onChange={this.handleChange}
                      >
                        <option>Economy Rooms</option>
                        <option>Basic Rooms</option>
                        <option>Standard Rooms</option>
                        <option>Deluxe Rooms</option>
                      </select>
                    </div>
                    <label htmlFor="range" className="form-label">
                      Room Price
                    </label>
                    <input
                      type="range"
                      class="custom-range"
                      min="0"
                      max="1500"
                      step="50"
                      id="customRange3"
                      onChange={this.setvalue}
                    />
                    <br />
                    {this.state.price > 0 ? (
                      <div className="alert alert-success">
                        Room Price::Rs <b>{this.state.price}</b>
                      </div>
                    ) : null}
                    <br />
                    <div className="card">
                      <div className="card-header">
                        <span htmlFor="" className="mr-4">
                          Check in Time
                        </span>
                        <Datepicker
                          selected={this.state.startDate}
                          onChange={this.calendarStartchange}
                        />
                      </div>
                      <div className="card-header">
                        <span htmlFor="" className="mr-4">
                          Check Out Time
                        </span>
                        <Datepicker
                          selected={this.state.endDate}
                          onChange={this.calendarEndchange}
                        />
                      </div>
                    </div>
                    <button className="btn btn-success mt-2  float-right">
                      Get available Rooms
                    </button>
                  </form>
                </Typography>
              </Paper>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-xs-6">
            <div className="chart">
              <Bar
                data={this.state.chartData}
                width={100}
                height={90}
                options={{}}
              />
            </div>
          </div>
        </div>
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
              <Display
                user_interest={this.props.user_hotels.user_matched_hotels}
              />
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div className="container">
          <Spinner
            size={120}
            spinnerColor={"#DF3612"}
            visible={true}
            style={{ display: "flex", justifyContent: "center" }}
          />
        </div>
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
