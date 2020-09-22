import Axios from "axios";
 import Cookie from "js-cookie";
import {CART_ADD_POST, CART_REMOVE_POST} from '../constants/cartConstants'

 const addToCart = (postId, qty) => async (dispatch, getState) => {
    try{
        const{data} = await Axios.get("/api/construction/"+ postId);
        dispatch({
            type:CART_ADD_POST,payload:{
                post:data.id,
                name:data.Heading,
                category:data.Category,
                image:data.Image,
                wage:data.Price,
                countInStock:data.countInStock,
                qty
            }
        });
        const {cart:{cartItems}} = getState();
        Cookie.set("cartItems",JSON.stringify(cartItems));
    }catch (error){

    }
}
const removeFromCart = (postId) => (dispatch, getState) => {
    dispatch({type: CART_REMOVE_POST, payload : postId});
    
    const {cart:{cartItems}} = getState();
     Cookie.set("cartItems",JSON.stringify(cartItems));
}
export {addToCart,removeFromCart};