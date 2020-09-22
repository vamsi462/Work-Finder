import {FIND_LIST_REQUEST,FIND_LIST_SUCCESS,FIND_LIST_FAIL} from "../constants/findWorkConstants"
import {FIND_ACCEPT_REQUEST,FIND_ACCEPT_SUCCESS,FIND_ACCEPT_FAIL} from "../constants/findWorkConstants"




function findWorkListReducer(state ={categories:[]},action){
    switch(action.type){
        case FIND_LIST_REQUEST:
            return{loading:true}
        case FIND_LIST_SUCCESS:
            return {loading:false,works: action.payload};
        case FIND_LIST_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}





// function findWorkListReducer(state={categories:[]},action){

//     switch(action.type){
//         case FIND_LIST_REQUEST:
//             return {loading:true}
//         case FIND_LIST_SUCCESS:
//             return {loading:false,works:action.payload}
//         case FIND_LIST_FAIL:
//             return {loading:false,error:action.payload}
//         default:
//             return state;

//     }

// }


function findWorkAcceptReducer(state={category:{}},action){

    switch(action.type){
        case FIND_ACCEPT_REQUEST:
            return {loading:true}
        case FIND_ACCEPT_SUCCESS:
            return {loading:false,category:action.payload}
        case FIND_ACCEPT_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;

    }

}

export {findWorkListReducer,findWorkAcceptReducer}