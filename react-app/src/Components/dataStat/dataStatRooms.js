import React, { useState } from "react";
import PropTypes from "prop-types";

// redux
import { connect } from "react-redux";

// material-ui stuff
import { Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { Divider } from "@material-ui/core";

// react router dom
import { Link, Switch } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: "360px",
    backgroundColor: theme.palette.background.paper
  }
}));

const dataStatRooms = props => {
  const {
    user_hotels: { user_interest }
  } = props;
  if (user_interest.length > 0) {
    return (
      <div className="stats here">
        <div className="container">
          {user_interest.map(rooms => (
            <div>
              <Paper elevation="2">
                <List
                  component="nav"
                  aria-label="contained data"
                  style={{ width: "75%" }}
                >
                  <ListItem button>
                    <ListItemText
                      primary={rooms.fields.slug}
                      secondary={`Price $ ::${rooms.fields.price}`}
                    />
                  </ListItem>
                </List>
              </Paper>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <span>Please add Rooms first</span>
      </div>
    );
  }
};

dataStatRooms.propTypes = {
  gethotel: PropTypes.func.isRequired,
  user_hotels: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  user_hotels: state.user_hotels
});

export default connect(
  mapStatetoProps,
  {}
)(dataStatRooms);
