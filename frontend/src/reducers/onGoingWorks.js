
import {ONGOING_LIST_REQUEST,ONGOING_LIST_SUCCESS,ONGOING_LIST_FAIL } from '../constants/onGoingConstants';


function onGoingListReducer(state={works:[]},action){

    switch(action.type){
        case ONGOING_LIST_REQUEST:
            return {loading:true}
        case ONGOING_LIST_SUCCESS:
            return {loading:false,works:action.payload}
        case ONGOING_LIST_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;

    }

}

export {onGoingListReducer}