import {get_hotel,add_hotel,isLoading,load_api,user_interest} from '../actions/action';
import axios from 'axios';

export const loadapi =() => dispatch =>{
    axios.get('/rest')
    .then(data=>{return data})
    .then(data=>{
        dispatch({
            type:load_api,
            payload:data.data
        })
    }).catch(err=>console.log(err));
}

// find requirements as per user needs returns a array
export const gethotel = (user_interests)=>{
    return{
        type:get_hotel,
        payload:user_interests
    }
}

// clear user likes
export const userInterest = (data)=>{
    return{
        type:user_interest,
        payload:data
    }
}

export const addhotel = ({hotel_name,hotel_price})=>(dispatch)=>{
    const item = {hotel_name,hotel_price};
    console.log('a post request');
    axios.post('/rest/api',item)
    .then(res=>{
        dispatch({
            type:add_hotel,
            payload:res.data
        })
    }).catch(err=>console.log(err));
}

export const isLoad = () =>{
    return{
        type:isLoading,
    }
}