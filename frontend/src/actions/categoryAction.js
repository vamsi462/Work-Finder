import axios from 'axios';
import {CATEGORY_LIST_REQUEST,CATEGORY_LIST_SUCCESS,CATEGORY_LIST_FAIL } from '../constants/categoryConstants';
import {CATEGORY_DETAILS_REQUEST,CATEGORY_DETAILS_SUCCESS,CATEGORY_DETAILS_FAIL } from '../constants/categoryConstants';
import {CATEGORY_SAVE_REQUEST,CATEGORY_SAVE_SUCCESS,CATEGORY_SAVE_FAIL } from '../constants/categoryConstants';
import {CATEGORY_DELETE_REQUEST,CATEGORY_DELETE_SUCCESS,CATEGORY_DELETE_FAIL } from '../constants/categoryConstants';


 const listCategoryPost =() => async (dispatch) => {
     try{
        dispatch({type:CATEGORY_LIST_REQUEST})
        const {data} = await axios.get("/api/category");
        dispatch({type:CATEGORY_LIST_SUCCESS,payload:data})
     }
     catch(error){
         dispatch({type:CATEGORY_LIST_FAIL,payload:error.message})
     }
    
 }


 const detailsCategoryPost = (categoryId) => async (dispatch) => {
    try{
        dispatch({type:CATEGORY_DETAILS_REQUEST,payload:categoryId})
        const {data} = await axios.get("/api/category/"+categoryId)
        dispatch({type:CATEGORY_DETAILS_SUCCESS,payload:data})
    }catch (error){
        dispatch({type:CATEGORY_DETAILS_FAIL,payload:error.message});
    }
}





const saveCategoryPost =(category) => async (dispatch,getState) => {
    try{
        dispatch({type:CATEGORY_SAVE_REQUEST,payload:category});
        const{userSignin:{userInfo}} =getState();
        // console.log(userInfo)
        // console.log(category)
        if(category._id==undefined){
            let newcat=category
            //console.log(newcat)
            // ("=====================================================",newcat.image.replace("\\","/"))
            const{data}=await axios.post('/api/category',category,{
                headers:{
                    'Authorization':'Bearer ' + userInfo.token
                
                }
    
            });
            
        dispatch({type:CATEGORY_SAVE_SUCCESS,payload:data})
        }else{
            const{data}= await axios.put('/api/category/'+category._id,category,{
                'Authorization':'Bearer ' +userInfo.token
            })
            dispatch({type:CATEGORY_SAVE_SUCCESS,payload:data})
        }
       
    }catch(error){
        dispatch({type:CATEGORY_SAVE_FAIL,payload:error.message})
    }
}



const deleteCategoryPost =(categoryId) => async (dispatch,getState) => {
    try{
        const{userSignin:{userInfo}}=getState();
        dispatch({type:CATEGORY_DELETE_REQUEST,payload: categoryId});
        const {data} = await axios.delete("/api/category/"+categoryId,{
            headers:{
                Authorization:'Bearer ' + userInfo.token
            }
        });
        dispatch({type:CATEGORY_DELETE_SUCCESS,payload:data,success:true});
    }catch(error){
        dispatch({type:CATEGORY_DELETE_FAIL,payload:error.message})
    }
}

 export {listCategoryPost,detailsCategoryPost,saveCategoryPost,deleteCategoryPost}