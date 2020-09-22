
import {COMPLETED_LIST_REQUEST,COMPLETED_LIST_SUCCESS,COMPLETED_LIST_FAIL } from '../constants/completedConstants';


function completedListReducer(state={works:[]},action){

    switch(action.type){
        case COMPLETED_LIST_REQUEST:
            return {loading:true}
        case COMPLETED_LIST_SUCCESS:
            return {loading:false,works:action.payload}
        case COMPLETED_LIST_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;

    }

}

export {completedListReducer}