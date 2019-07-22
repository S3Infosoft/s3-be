import React, { Component, Fragment } from "react";
import classNames from "classnames";
import compose from "recompose/compose";
import withWidth from "@material-ui/core/withWidth";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

import styles from "./styles";
import SearchBar from "../search-bar";

export default compose(
  withStyles(styles, { withTheme: true }),
  withWidth()
)(({ classes, width, title, isDrawerOpen, handleToggleDrawer }) => (
  <AppBar position="absolute" className={classes.appBar} color="inherit">
    <Toolbar disableGutters>
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={() => handleToggleDrawer()}
        className={classNames(classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <Grid container>
        <Grid item xs={8} />
        <Hidden smDown>
          <Grid item xs>
            <SearchBar />
          </Grid>
        </Hidden>
      </Grid>

      <IconButton>
        <QuestionAnswerIcon />
      </IconButton>
      <IconButton>
        <NotificationsIcon />
      </IconButton>
      <IconButton>
        <Avatar
          alt="Profile"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc7HU6g4eCZhLOlN7Jbr5r41qpgmlRA2JunX4T5tcTcs3urfnY"
          className={classes.avatar}
        />
      </IconButton>
    </Toolbar>
  </AppBar>
));
