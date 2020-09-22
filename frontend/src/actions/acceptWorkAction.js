import axios from 'axios'


const acceptWorkPost = (category) => async (dispatch,getState) => {
    console.log("hdhak",category)

    try {
        dispatch({ type: 'ACCEPT_LIST_REQUEST',payload:category})
        const{userSignin:{userInfo}} = getState();
        const { data } = await axios.post('/api/acceptwork',category,{
            headers:{
                Authorization:'Bearer ' + userInfo.token
            }
        });
        console.log("hiiiii",data)
        dispatch({ type: 'ACCEPT_LIST_SUCCESS', payload: data,success:true })
    } catch(error){
        dispatch({ type: 'ACCEPT_LIST_FAIL',payload:error.message })
    }

}

export  {acceptWorkPost}