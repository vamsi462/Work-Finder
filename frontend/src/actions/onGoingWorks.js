import axios from 'axios';
import {ONGOING_LIST_REQUEST,ONGOING_LIST_SUCCESS,ONGOING_LIST_FAIL } from '../constants/onGoingConstants';


 const listOnGoingWorksPost =(postId) => async (dispatch) => {
    console.log("postId",postId)
    try{
       dispatch({type:ONGOING_LIST_REQUEST})
    //    console.log("userid",postId)
       const {data} = await axios.get("/api/acceptwork/"+postId);
       console.log("ongoingdata",data)
       dispatch({type:ONGOING_LIST_SUCCESS,payload:data})
    }
    catch(error){
        dispatch({type:ONGOING_LIST_FAIL,payload:error.message})
    }
   
}


export {listOnGoingWorksPost}