import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

import styles from "./styles";
import { Header, Footer, Sidebar, Panel } from "../../components";

const data = [
  { name: "Mon", Visits: 2200, Orders: 3400 },
  { name: "Tue", Visits: 1280, Orders: 2398 },
  { name: "Wed", Visits: 5000, Orders: 4300 },
  { name: "Thu", Visits: 4780, Orders: 2908 },
  { name: "Fri", Visits: 5890, Orders: 4800 },
  { name: "Sat", Visits: 4390, Orders: 3800 },
  { name: "Sun", Visits: 4490, Orders: 4300 }
];

export default withStyles(styles, { withTheme: true })(
  class extends Component {
    state = {
      isDrawerOpen: false
    };

    handleToggleDrawer() {
      this.setState(state => ({
        isDrawerOpen: !state.isDrawerOpen
      }));
    }
    render() {
      const { isDrawerOpen } = this.state;
      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <Header
            title="Dashboard"
            isDrawerOpen={isDrawerOpen}
            handleToggleDrawer={() => this.handleToggleDrawer()}
          />
          <Sidebar
            isDrawerOpen={isDrawerOpen}
            handleToggleDrawer={() => this.handleToggleDrawer()}
          />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <div>
              <Typography
                variant="display1"
                color="inherit"
                noWrap
                className={classes.title}
              >
                Dashboard
              </Typography>
            </div>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <Panel>
                  <Typography variant="subheading">Orders</Typography>
                  <ResponsiveContainer width="100%" height={60}>
                    <AreaChart data={data}>
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="Orders"
                        stroke={false}
                        fill="#8884d8"
                        activeDot={{ r: 8 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </Panel>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Panel>
                  <Typography variant="subheading">Visits</Typography>
                  <ResponsiveContainer width="100%" height={60}>
                    <AreaChart data={data}>
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="Visits"
                        stroke={false}
                        fill="#82ca9d"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </Panel>
              </Grid>
              <Grid item xs={12}>
                <Panel>
                  <ResponsiveContainer width="100%" height={240}>
                    <AreaChart data={data}>
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="Visits"
                        stroke={false}
                        fill="#82ca9d"
                      />
                      <Area
                        type="monotone"
                        dataKey="Orders"
                        stroke={false}
                        fill="#8884d8"
                        activeDot={{ r: 8 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </Panel>
              </Grid>
            </Grid>
            <Footer />
          </main>
        </div>
      );
    }
  }
);
