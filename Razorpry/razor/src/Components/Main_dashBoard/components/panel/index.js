import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    borderRadius: 4,
  },
});

export default withStyles(styles)(({ classes, children }) => (
  <div className={classes.root} elevation={1}>
    {children}
  </div>
));
