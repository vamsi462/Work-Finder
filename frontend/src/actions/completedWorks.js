import axios from 'axios';
import {COMPLETED_LIST_REQUEST,COMPLETED_LIST_SUCCESS,COMPLETED_LIST_FAIL } from '../constants/onGoingConstants';


 const listCompletedWorksPost =() => async (dispatch) => {
    try{
       dispatch({type:COMPLETED_LIST_REQUEST})
       const {data} = await axios.get("");
       dispatch({type:COMPLETED_LIST_SUCCESS,payload:data})
    }
    catch(error){
        dispatch({type:COMPLETED_LIST_FAIL,payload:error.message})
    }
   
}


export {listCompletedWorksPost}