import {CATEGORY_LIST_REQUEST,CATEGORY_LIST_SUCCESS,CATEGORY_LIST_FAIL } from '../constants/categoryConstants';
import {CATEGORY_DETAILS_REQUEST,CATEGORY_DETAILS_SUCCESS,CATEGORY_DETAILS_FAIL } from '../constants/categoryConstants';
import {CATEGORY_SAVE_REQUEST,CATEGORY_SAVE_SUCCESS,CATEGORY_SAVE_FAIL } from '../constants/categoryConstants';
import {CATEGORY_DELETE_REQUEST,CATEGORY_DELETE_SUCCESS,CATEGORY_DELETE_FAIL } from '../constants/categoryConstants';


function categoryPostReducer(state ={categories:[]},action){
    switch(action.type){
        case CATEGORY_LIST_REQUEST:
            return{loading:true}
        case CATEGORY_LIST_SUCCESS:
            return {loading:false,categories: action.payload};
        case CATEGORY_LIST_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

function categoryPostDetailsReducer(state ={category:{}},action){
    switch(action.type){
        case CATEGORY_DETAILS_REQUEST:
            return{loading:true}
        case CATEGORY_DETAILS_SUCCESS:
            return {loading:false,category:action.payload};
        case CATEGORY_DETAILS_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

function categoryPostSaveReducer(state ={category:{}},action){
    switch(action.type){
        case CATEGORY_SAVE_REQUEST:
            return{loading:true}
        case CATEGORY_SAVE_SUCCESS:
            return {loading:false,success:true,category:action.payload};
        case CATEGORY_SAVE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

function categoryPostDeleteReducer(state ={category:{}},action){
    switch(action.type){
        case CATEGORY_DELETE_REQUEST:
            return{loading:true}
        case CATEGORY_DELETE_SUCCESS:
            return {loading:false,category:action.payload,success:true};
        case CATEGORY_DELETE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}


export {categoryPostReducer,categoryPostDetailsReducer,categoryPostSaveReducer,categoryPostDeleteReducer}