import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";

import styles from "./styles";

export default withStyles(styles)(
  class extends Component {
    render() {
      const { classes } = this.props;
      return (
        <Grid container fullWidth spacing={8} className={classes.root}>
          <Grid item xs={11}>
            <TextField
              className="texts"
              placeholder="Search"
              className={classes.input}
              fullWidth
              InputProps={{
                disableUnderline: true
              }}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item xs={1}>
            <Search />
          </Grid>
        </Grid>
      );
    }
  }
);
