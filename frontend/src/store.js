import {createStore,combineReducers, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { cartReducer } from './reducers/cartReducers'
import { userSigninReducer } from './reducers/userReducers';
import { categoryPostReducer, categoryPostDetailsReducer, categoryPostSaveReducer, categoryPostDeleteReducer } from './reducers/categoryReducer';
import {findWorkListReducer,findWorkAcceptReducer} from "./reducers/findWorkReducer"
import { onGoingListReducer } from './reducers/onGoingWorks';
import { completedListReducer } from './reducers/completedReducer';
import {userRegisterReducer} from "./reducers/userReducers"
import {acceptWorkReducer} from "./reducers/acceptWorkReducer"

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

 const initialState= {cart : {cartItems},userSignin:{userInfo}};
// const initialState={cart : {cartItems}}
const reducer= combineReducers({
    categoryPost: categoryPostReducer,
    categoryPostDetails:categoryPostDetailsReducer,
    cart:cartReducer ,
    userSignin:userSigninReducer,
    categoryPostSave:categoryPostSaveReducer,
    categoryPostDelete:categoryPostDeleteReducer,
    findWorkList:findWorkListReducer,
    findWorkAccept:findWorkAcceptReducer,
    onGoingList:onGoingListReducer,
    completedList:completedListReducer,
    userRegister:userRegisterReducer,
    acceptWork:acceptWorkReducer,

})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));


export default store;


    // loading:loadingReducer,
    // cart:cartReducer,
    // farm:farmReducer,
    // gardening:gardeningReducrer,
    // cleaning:cleaningReducer,
    // userSignin:userSigninReducer,
    // userRegister: userRegisterReducer,
