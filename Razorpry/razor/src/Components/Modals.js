import React, { Component } from 'react'
import {Modal,ModalBody,ModalHeader,Button,Alert,Jumbotron} from 'reactstrap';
import PropTypes from 'prop-types';
import Appcss from '../App.css';
import {userInterest} from '../actions/act';
import {connect} from 'react-redux';

class Modals extends Component {
    componentWillReceiveProps(props){
        console.log(this.props.ele);
    }
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          bool:false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    render(){
        const {bool} = this.state;
        return(
            <React.Fragment>
                <Alert color="succcess">
                    {this.props.ele.title}
                        <Button color="info" onClick={this.toggle} className="float-right">Info</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>{this.props.ele.title}</ModalHeader>
                <ModalBody>
                    <Jumbotron>
                        ID:{this.props.ele.albumId}
                        <br />
                        Name:{this.props.ele.title}
                        <br />                        
                        Contact:{this.props.ele.url}
                        <br />
                    </Jumbotron>
                    <Button color="success" className="float-right" onClick={()=>{
                        this.props.userInterest(this.props.ele);
                                this.toggle();
                        }}>Add Hotel</Button>
                </ModalBody>
                </Modal>
            </Alert>
        </React.Fragment>
        )
    }
}


Modals.propTypes = ({
    userInterest:PropTypes.func.isRequired,
    user_interest:PropTypes.array.isRequired  
})

const mapStatetoProps = (state)=>({
    user_interest:state.user_interest
})


export default connect(mapStatetoProps,{userInterest})(Modals);
