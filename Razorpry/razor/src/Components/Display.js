import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {GridList,GridTitle, GridTile} from 'material-ui';
import { Button } from 'reactstrap';
import Appcss from '../App.css';

import Modals from './Modals';
class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          dataId:{}
        };
    
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(({
          modal: !this.state.modal
        }));
      }    
    
    componentDidMount(){
        console.log(this.props.user_interest);
    }
    render() {
        const data = this.props.user_interest;
        return (
            <div>
            <GridList cols={4}>
                {data.length>0 ? data.map(ele =>(
                    <Modals ele={ele} />
                )):<div>Loading..</div>}
                </GridList>
            </div>
        )
    }
}

export default Display;