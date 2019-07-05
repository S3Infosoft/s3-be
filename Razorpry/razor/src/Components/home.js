import React, { Component } from 'react'
//components
import Form from './Form';
import Navbar from './navbar';

import PropTypes, { element } from 'prop-types';
// redux
import {connect} from 'react-redux';
import {loadapi} from '../actions/act';

class home extends Component {
    componentDidMount(){
        this.props.loadapi();
    }
    render() {
        return (
            <div>
                <Navbar />
                <Form />
            </div>
        )
    }
}

const mapStatetoProps = (state)=>({
    user_hotels:state.user_hotels,
    isLoading:state.isLoading
  })
  
  
home.propTypes={
    addhotel:PropTypes.func.isRequired,
    loadapi:PropTypes.func.isRequired,
    user_hotels:PropTypes.object.isRequired
}

export default connect(mapStatetoProps,{loadapi})(home);
