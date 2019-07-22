export default theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    padding: `0 ${theme.spacing.unit}px`,
  },
  appBarSpacer: theme.mixins.toolbar,
  title: {
    flex: 1,
    textAlign: 'left',
  },
});
