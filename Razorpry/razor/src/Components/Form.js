import React, { Component } from 'react'
import FinalOrder from './FinalOrder';

import  Display from './Display';

// configure calendar
import Datepicker from 'react-datepicker';

// redux
import PropTypes, { element } from 'prop-types';
import {connect} from 'react-redux';
import {gethotel,addhotel,loadapi} from '../actions/act';

class Form extends Component {
    constructor(){
        super();
        this.state={
            hotel_name:'',
            hotel_price:0,
            startDate: new Date(),
            bool:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.calendarchange = this.calendarchange.bind(this);
    }
    handleChange(e){
        console.log(e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    calendarchange(date) {
        this.setState({
          startDate: date
        });
      }
    submit(e){
        e.preventDefault()
        const {hotel_name,hotel_price,startDate} = this.state;
        const data = {hotel_name,hotel_price,startDate};
        const final = this.props.user_hotels.main_api;
            // set the filtered array as per user request to hotel and add filtered one to redux store
                const arr = final.filter((element)=>{
                    return element.id >=1 && element.id<=10;
                })
                this.props.gethotel(arr);
                this.setState({
                    bool:true
                })
      
    }
    render() {
        const {bool} = this.state;
        const main_api = this.props.user_hotels.main_api;
        const user_form = (<div>
            <form onSubmit={this.submit}>
                    <input type="text" name="hotel_name" onChange={this.handleChange}/>
                    <input type="text" name="hotel_price" onChange={this.handleChange}/>
                    <button>Get available hotels</button>
                    <br /><br />
                       <Datepicker 
                       selected={this.state.startDate}
                         onChange={this.calendarchange}
                       />
            </form>
        </div>)
        if(main_api.length>0){
            return (
                <div>
                    {!bool ? user_form:(<div>
                        {user_form}
                        <Display user_interest={this.props.user_hotels.main_api}/>
                    </div>
            )}
                </div>
            )
        }else{
            return <div>Loading....</div>
        }
    }
}

Form.propTypes={
    gethotel:PropTypes.func.isRequired,
    user_hotels:PropTypes.object.isRequired
}

const mapStatetoProps = (state)=>({
    user_hotels:state.user_hotels,
})
  

export default connect(mapStatetoProps,{gethotel})(Form);