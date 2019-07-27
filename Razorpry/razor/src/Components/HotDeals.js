import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const HotDeals = props => {
  const [hot, setHot] = useState([]);
  const val = props.user_hotels_main_api;
  return <div />;
};
const mapStateToProps = state => ({
  user_hotels: state.user_hotels
});

HotDeals.propTypes = {
  user_hotels: PropTypes.object.isRequired,
  main_api: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(HotDeals);
