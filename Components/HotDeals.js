import React, { Component, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia
} from "@material-ui/core";
import { Button, Typography } from "@material-ui/core";

// redux data actions
import { addUser } from "../actions/act";

import "../Buttons.css";
import { Paper, TextField, CardHeader } from "@material-ui/core";
const useStyles = makeStyles({
  card: {
    maxWidth: 340
  }
});

const HotDeals = props => {
  const classes = useStyles();
  const [data, setData] = useState({ name: "", email: "" });
  const changer = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submit = e => {
    e.preventDefault();
    props.addUser(data);
    window.alert(
      `thank you for submitting ${
        data.name
      } you can now proceed with our room bookings`
    );
  };
  return (
    <div>
      <br />
      <span>
        <b className="center">Our Top Best Rooms in Hotel</b>
      </span>
      <span className="mt-4 ml-auto">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Room
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ea, voluptates.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More...
                  </Button>
                </CardActions>
              </Card>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Room Pic"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Room
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ea, voluptates.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More...
                  </Button>
                </CardActions>
              </Card>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <Paper elevation="2">
                <Card>
                  <CardHeader title="Please provide Some Details" />
                  <CardContent>
                    <form onSubmit={submit} method="post">
                      <TextField
                        id="standard-uncontrolled"
                        alt="Room Pic"
                        required
                        type="text"
                        label="Name"
                        name="name"
                        onChange={changer}
                        defaultValue=""
                        className={classes.textField}
                        margin="normal"
                      />
                      <TextField
                        required
                        type="email"
                        id="standard-required"
                        label="Email"
                        name="email"
                        defaultValue=""
                        onChange={changer}
                        className={classes.textField}
                        margin="normal"
                      />
                      <Button variant="h3" color="primary" type="submit">
                        Submit info
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </Paper>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};

HotDeals.propTypes = {
  user_hotels: PropTypes.object.isRequired,
  status_reducer: PropTypes.object.isRequired,
  addUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user_hotels: state.user_hotels,
  status_reducer: state.status_reducer
});

export default connect(
  mapStateToProps,
  { addUser }
)(HotDeals);
