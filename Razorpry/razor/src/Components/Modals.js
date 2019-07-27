import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  Alert,
  Jumbotron
} from "reactstrap";
import PropTypes from "prop-types";
import Appcss from "../App.css";
import { userInterest } from "../actions/act";
import { connect } from "react-redux";

class Modals extends Component {
  componentWillReceiveProps(props) {
    console.log(this.props.ele);
  }
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      bool: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    const { bool } = this.state;
    return (
      <React.Fragment>
        <div className="container" style={{ width: "100%" }}>
          <div className="card">
            <div className="row">
              <div className="col-md-6 col-sm-0 col-lg-6 col-xl-6">
                <div className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block "
                        src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/82/61/8261498_v3.jpeg"
                        alt="room"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/itemimages/63/30/6330212.jpeg"
                        alt="rooms"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-0 col-lg-4 col-xl-4">
                <div className="carousel" id="carousel" />
              </div>
              <Alert color="succcess">
                <Button
                  color="info"
                  onClick={this.toggle}
                  className="float-right"
                >
                  Info
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                  <ModalHeader toggle={this.toggle}>Modal</ModalHeader>
                  <ModalBody>
                    <Jumbotron>
                      ID:Hello
                      <br />
                      Name:Hey
                      <br />
                      Contact:Why
                      <br />
                    </Jumbotron>
                    <Button
                      color="success"
                      className="float-right"
                      onClick={() => {
                        this.props.userInterest(this.props.ele);
                        this.toggle();
                      }}
                    >
                      Add Hotel
                    </Button>
                  </ModalBody>
                </Modal>
              </Alert>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Modals.propTypes = {
  userInterest: PropTypes.func.isRequired,
  user_interest: PropTypes.array.isRequired
};

const mapStatetoProps = state => ({
  user_interest: state.user_interest
});

export default connect(
  mapStatetoProps,
  { userInterest }
)(Modals);
