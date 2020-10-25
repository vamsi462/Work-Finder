import React ,{Fragment}from "react";
import {Link, withRouter} from "react-router-dom";
import { isAuthenticated,signout } from "../auth";


const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return {color: "blue"};
  } else {
    return {color: "red "};
  }
};

const Menu = ({history}) => {
    return (
        <div>
        <ul  className = "nav ml-auto  bg-dark " >
            <li className="nav-item">
            <Link style={isActive(history, "/")} className="nav-link" to="/">
              Home
            </Link>
          </li>
       
        {isAuthenticated()&&isAuthenticated().user.role===0&& (
          
            <Fragment>
            <Link style={isActive(history, "/user/dashboard")} className="nav-link" to="/user/dashboard">
            Dashboard
            </Link>
            <Link style={isActive(history, "/cart")} className="nav-link" to="/cart">
              Cart{" "}
                    {/* <sup>
                        <small className="cart-badge">{itemTotal()}</small>
                    </sup> */}
            </Link>
            </Fragment>
          
         )}
   
          {!isAuthenticated() && (
            <Fragment>
          <li className = "nav-item" >
            <Link
              style={isActive(history, "/signin")}
              className="nav-link"
              to="/signin">
              SignIn
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={isActive(history, "/signup")}
              className="nav-link"
              to="/signup">
              SignUp
            </Link>
          </li>
            </Fragment>
          )}
            {isAuthenticated() && (
           
                 <li className="nav-item">
            <span
                style={{cursor:"pointer" , color:'#ffffff '}}
                className="nav-link"
                onClick={()=>signout(()=>{
                  history.push('/')
                })}
            >
              Signout
            </span>
          </li>
           )}
           </ul>
        </div>
    )
}

export default withRouter(Menu)
