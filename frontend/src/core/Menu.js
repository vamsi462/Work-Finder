import React ,{Fragment}from "react";
import {Link, withRouter} from "react-router-dom";
import { isAuthenticated,signout } from "../auth";


const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return {color: "#ff9900"};
  } else {
    return {color: "white"};
  }
};

const Menu = ({history}) => {
    return (
        <div>
        <ul className = "navbar-brand ml-auto bg-dark" >
            <li className="nav-item">
            <Link style={isActive(history, "/")} className="nav-link" to="/">
              Work Finder
            </Link>
          </li>
          <li className="nav-item">
            <Link Link style = {
              isActive(history, "/worksByCategories")
            }
            className = "nav-link"
            to = "/worksByCategories" >
              Store
            </Link>
          </li>
       
        {isAuthenticated()&&isAuthenticated().user.role===0&& (
          
            <Fragment>
            <Link style={isActive(history, "/user/dashboard")} className="nav-link" to="/user/dashboard">
            Dashboard
            </Link>
            <Link style={isActive(history, "/cart")} className="nav-link" to="/cart">
              Cart{" "}
                   
            </Link>
            </Fragment>
          
         )}

          {isAuthenticated()&&isAuthenticated().user.role===1&& (
            <li className="nav-item">
            <Link  style = {
              isActive(history, "/workprovider/dashboard")
              }
            className = "nav-link"
            to = "workprovider/dashboard"
             >

            Dashboard
            </Link>
                        
          </li>
         )}

   
          {!isAuthenticated() && (
            <Fragment>
          <li className = "nav-end" >
            <Link
              style={isActive(history, "/signin")}
              className = "nav-link button is-primary"
              to="/signin">
              SignIn
            </Link>
          </li>
          <li className="nav-end">
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
