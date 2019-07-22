import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./assets/global-theme";

import { Dashboard } from "./views";

export default () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Dashboard />
  </MuiThemeProvider>
);
