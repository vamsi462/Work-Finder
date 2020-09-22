import { CART_ADD_POST, CART_REMOVE_POST } from "../constants/cartConstants";

function cartReducer(state={cartItems:[]},action){
    switch(action.type){
        case CART_ADD_POST:
            const item = action.payload;
            const post =state.cartItems.find(x=>x.post=== item.post)
            if(post){
              return{
                  cartItems:
                  state.cartItems.map(x=>x.post === post.post? item:x)
                };
            } return{cartItems:[...state.cartItems,item]};
            case CART_REMOVE_POST:
                return { cartItems :state.cartItems.filter(x => x.post !== action.payload)}
            default: return state;
    }
   
}


export {cartReducer};