const drawerWidth = 240;

export default theme => {
  console.log(theme);
  return {
    drawerPaper: {
      [theme.breakpoints.up('md')]: {
        position: 'relative',
      },
      border: 0,
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing.unit * 7,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 9,
      },
    },
    toolbar: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      boxSizing: 'border-box',
      ...theme.mixins.toolbar,
    },
    pageTitleContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: `0 0 0 ${theme.spacing.unit * 3}px`,
    },
    pageTitleTypography: {
      padding: `0 ${theme.spacing.unit * 4}px`,
    },
  };
};
