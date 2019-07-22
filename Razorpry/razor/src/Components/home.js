import React, { Component } from "react";
//components
import Form from "./Form";
import Navbar from "./Navbar";
import Dashboard from "./Main_dashBoard/MuiDashBoard";

import PropTypes, { element } from "prop-types";
// redux
import { connect } from "react-redux";
import { loadapi } from "../actions/act";

class home extends Component {
  componentDidMount() {
    this.props.loadapi();
    console.log("home monted");
  }
  render() {
    return (
      <div>
        <Navbar />
        <Dashboard />
        <Form />
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
