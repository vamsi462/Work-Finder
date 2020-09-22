

function acceptWorkReducer(state={acceptwork:[]},action){
    switch (action.type){
        case 'ACTION_LIST_REQUEST':
            return({loading:true})
        case 'ACTION_LIST_SUCCESS':
            return ({loading:false,acceptwork:action.payload})
        case 'ACTION_LIST_FAIL':
            return ({loading:false,error:action.payload})
            default:
                return state;

    }
}

export {acceptWorkReducer}