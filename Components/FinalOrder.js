import React, { Component } from "react";

// redux stuff
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { finalPay } from "../actions/act";

import PropTypes from "prop-types";
import { Divider, List, ListItem, ListItemText } from "@material-ui/core";

// material ui
import {
  makeStyles,
  Paper,
  Card,
  CardHeader,
  CardContent
} from "@material-ui/core";
import { Button } from "@material-ui/core";

import { Link } from "react-router-dom";
class FinalOrder extends Component {
  submit_forPay = rooms => {
    console.log(rooms);
    this.props.finalPay(rooms);
  };
  render() {
    const { user_interest } = this.props.user_hotels;
    const len = user_interest.length;
    const user_exist = this.props.status_reducer.users;
    if (user_exist.length === 0) {
      return (
        <div className="conatiner">
          <Button variant="h3" color="secondary">
            <Link to="/">Please Fill initial contact form info</Link>
          </Button>
        </div>
      );
    }
    if (user_interest.length > 0) {
      return (
        <div className="container">
          <div className="row">
            {user_interest.map(rooms => (
              <div>
                <Paper>
                  <Card>
                    <CardHeader>{rooms.fields.name}</CardHeader>
                    <CardContent>
                      <div className="content">
                        <List component="nav" aria-label="mailbox folders">
                          <span>Room price includes all taxes</span>
                          <ListItem button>
                            <ListItemText
                              primary={`Pets Allowed:: ${rooms.fields.pets}`}
                            />
                          </ListItem>
                          <Divider />
                          <ListItem button divider>
                            <ListItemText
                              primary={`Breakfast Included ::${
                                rooms.fields.breakfast
                              }`}
                            />
                          </ListItem>
                          <ListItem button>
                            <ListItemText
                              primary={`Type ::${rooms.fields.type}`}
                            />
                          </ListItem>
                          <Divider light />

                          <ListItem button>
                            <ListItemText
                              primary={`Capacity ::${rooms.fields.capacity}`}
                            />
                          </ListItem>
                          <Divider light />
                          <ListItem button>
                            <ListItemText
                              primary={`Price ::$ ${rooms.fields.price}`}
                            />
                          </ListItem>
                          <Divider light />
                          <ListItem button>
                            <ListItemText
                              primary={`Area ::${rooms.fields.size}sq`}
                            />
                          </ListItem>
                          <b>Extras included in room</b>
                          {rooms.fields.extras.map(rooms => (
                            <div>
                              <span>{rooms}</span>
                              <br />
                            </div>
                          ))}
                          <Divider light />
                          <Button
                            variant="h4"
                            color="secondary"
                            onClick={this.submit_forPay.bind(this, rooms)}
                          >
                            <Link to="/pay_now">Buy Now</Link>
                          </Button>
                        </List>
                      </div>
                    </CardContent>
                  </Card>
                </Paper>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="conatiner">
          <Button variant="h3" color="secondary">
            <Link to="/order_place">Please Add Rooms first to compare</Link>
          </Button>
        </div>
      );
    }
  }
}

FinalOrder.propTypes = {
  user_hotels: PropTypes.object.isRequired,
  user_interest: PropTypes.object.isRequired,
  status_reducer: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user_hotels: state.user_hotels,
  user_interest: state.user_hotels.user_interest,
  status_reducer: state.status_reducer
});

export default connect(
  mapStateToProps,
  { finalPay }
)(FinalOrder);
