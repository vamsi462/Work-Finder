import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import SignUp from  './SignUp'
import SignIn from "./SignIn";
import Home from "../core/Home";
import WorksStore from "../core/WorksStore";
import PrivateRoute from "../auth/PrivateRoute";
import Dashboard from "./WorkerDashBoard";
import Profile from "./Profile";
import Cart from "../core/Cart";

const Routes = () => {
        return ( 
            <BrowserRouter>
             <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={SignUp} />
                <Route  path ="/signin"  exact component={SignIn}/>
                         <Route  path="/cart" exact component={Cart} />
                 <Route exact path="/worksByCategories" component={WorksStore} />
                  <PrivateRoute path="/user/dashboard" exact component={Dashboard}/>
                  <PrivateRoute path="/profile/:userId" exact component={Profile}/>

            </Switch>
    </BrowserRouter>
  );
};

export default Routes;