import React, { Component } from "react";

import Modals from "./Modals";
class Display extends Component {
  render() {
    let data = this.props.user_interest;
    return (
      <div>
        {data.length > 0 ? (
          data.map(ele => <Modals ele={ele} />)
        ) : (
          <div>Loading..</div>
        )}
      </div>
    );
  }
}

export default Display;
