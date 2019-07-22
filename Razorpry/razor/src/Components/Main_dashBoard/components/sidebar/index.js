import React, { Fragment } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import StarIcon from '@material-ui/icons/Star';

import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import styles from './styles';

export default withStyles(styles, { withTheme: true })(
  ({ classes, isDrawerOpen, handleToggleDrawer }) => (
    <Fragment>
      <Hidden smDown>
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper,
          }}>
          <div className={classes.toolbar}>
            <div className={classes.pageTitleContainer}>
              <div className={classes.pageTitleIcon}>
                <StarIcon />
              </div>
              <Typography
                variant="headline"
                className={classes.pageTitleTypography}>
                auditis
              </Typography>
            </div>
          </div>
          <List>{mailFolderListItems}</List>
          <List>{otherMailFolderListItems}</List>
        </Drawer>
      </Hidden>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor="left"
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !isDrawerOpen && classes.drawerPaperClose
            ),
          }}
          open={isDrawerOpen}
          onClose={handleToggleDrawer}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}>
          <div className={classes.toolbar}>
            <div className={classes.pageTitleContainer}>
              <div className={classes.pageTitleIcon}>
                {' '}
                <StarIcon />
              </div>
              <Typography
                variant="headline"
                className={classes.pageTitleTypography}>
                auditis
              </Typography>
            </div>
          </div>
          <List>{mailFolderListItems}</List>
          <List>{otherMailFolderListItems}</List>
        </Drawer>
      </Hidden>
    </Fragment>
  )
);
