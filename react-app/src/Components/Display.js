import React, { Component } from "react";

// components
import RoomStat from "./dataStat/dataStatRooms";
import Errors from "./Errors";

import Modals from "./Modals";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
class Display extends Component {
  render() {
    let data = this.props.user_interest;
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8 col-sm-12 col-lg-8">
            {data.length > 0 ? (
              data.map(ele => <Modals ele={ele} />)
            ) : (
              <div>
                <Errors />
              </div>
            )}
          </div>
          <div>
            <div>
              <RoomStat />
              <div className="h7">Max:3 Rooms to compare</div>
              <Button color="primary" variant="h3">
                <Link to="/final_place">Proceed With Order</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
