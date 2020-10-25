import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import SignUp from  './SignUp'
import SignIn from "./SignIn";
import Home from "../core/Home";

const Routes = () => {
        return ( 
            <BrowserRouter>
             <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={SignUp} />
                <Route  path ="/signin"  exact component={SignIn}/>
            </Switch>
    </BrowserRouter>
  );
};

export default Routes;