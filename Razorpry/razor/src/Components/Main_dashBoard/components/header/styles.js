const drawerWidth = 240;

export default theme => ({
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    boxShadow: 'none',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  avatar: {},
});
