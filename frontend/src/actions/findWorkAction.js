import axios from  'axios'
import {FIND_LIST_REQUEST,FIND_LIST_SUCCESS,FIND_LIST_FAIL} from "../constants/findWorkConstants"
import {FIND_ACCEPT_REQUEST,FIND_ACCEPT_SUCCESS,FIND_ACCEPT_FAIL} from "../constants/findWorkConstants"








const listFindWork =() => async (dispatch) =>{
   try{
    dispatch({type:FIND_LIST_REQUEST})
    const {data}=  axios.get("/api/category");
    dispatch({type:FIND_LIST_SUCCESS,payload:data})
   }catch(error){
       dispatch({type:FIND_LIST_FAIL,payload:error.message})
   }
}

const acceptFindWork=(postId)=>(dispatch)=>{
try{  dispatch({type:FIND_ACCEPT_REQUEST})
    const {data}=axios.post("/api/category/"+postId);
    dispatch({type:FIND_ACCEPT_SUCCESS,payload:data})
}catch(error){
    dispatch({type:FIND_ACCEPT_FAIL,payload:error.message})
}
}
export {listFindWork,acceptFindWork}