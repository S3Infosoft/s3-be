import React, { Component } from "react";
import { Button } from "reactstrap";
import Appcss from "../App.css";
import Cards from "./Cards";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField/TextField";

import Modals from "./Modals";
class Display extends Component {
  render() {
    const data = this.props.user_interest;
    return (
      <div>
        {data.length > 0 ? (
          data.map(ele => <Cards ele={ele} />)
        ) : (
          <div>Loading..</div>
        )}
      </div>
    );
  }
}

export default Display;
