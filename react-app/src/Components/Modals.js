import React, { Component } from "react";

// redux stuff
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { userInterest } from "../actions/act";
import { connect } from "react-redux";

// material-ui stuff
import { makeStyles } from "@material-ui/core";
import { CardActionArea, CardContent, CardHeader } from "@material-ui/core";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";
import {
  Typography,
  CardActions,
  Button,
  Card,
  CardMedia
} from "@material-ui/core";
import {
  single_images,
  double_images,
  Family_images
} from "./dataStat/room_images";
import { SnackbarContent } from "@material-ui/core";

import "../App.css";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 600
  },
  snackbar: {
    margin: theme.spacing(0.85)
  }
}));

/* the modal content */
const Modals = props => {
  const { fields, sys, images } = props.ele;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.userInterest(props.ele);

    setOpen(false);
  };

  return (
    <div>
      <Card className="sds">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={images[Math.floor(Math.random() * 3)]}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {fields.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <span>
                <div>{fields.description}</div>
              </span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Get More Info
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">
              {`Room Type::${fields.name}`}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <div className={classes.root}>
                  <SnackbarContent
                    className={classes.snackbar}
                    message={fields.description}
                  />
                  <SnackbarContent
                    className={classes.snackbar}
                    message={`Price For Night :: Rs${fields.price}`}
                  />
                  <SnackbarContent
                    className={classes.snackbar}
                    message={`BreakFast included in room : ${
                      fields.breakfast === true
                        ? "Included in Bill"
                        : "Not included for this Room"
                    }`}
                  />
                  <SnackbarContent
                    className={classes.snackbar}
                    message={`Room Size :: ${fields.size}sq feet`}
                  />
                  <SnackbarContent
                    className={classes.snackbar}
                    message={`Room Intended For :: ${fields.slug}`}
                  />
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="secondary" autoFocus>
                Add Room
              </Button>
            </DialogActions>
          </Dialog>
        </CardActions>
      </Card>
    </div>
  );
};

Modals.propTypes = {
  userInterest: PropTypes.func.isRequired,
  user_interest: PropTypes.array.isRequired
};

const mapStatetoProps = state => ({
  user_interest: state.user_interest
});

export default connect(
  mapStatetoProps,
  { userInterest }
)(Modals);
