import React ,{Fragment}from "react";
import {Link, withRouter} from "react-router-dom";


const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return {color: "#ff9900"};
  } else {
    return {color: "#ffffff "};
  }
};

const Menu = ({history}) => {
    return (
        <div>
        <li className = "nav-item" >
            <Link
              style={isActive(history, "/signin")}
              className="nav-link"
              to="/signin">
              SignIn
            </Link>
        </li>
        </div>
    )
}

export default withRouter(Menu)
