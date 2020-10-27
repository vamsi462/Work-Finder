import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "../core/Home";
import WorksStore from "../core/WorksStore";
import PrivateRoute from "../auth/PrivateRoute";
import Dashboard from "./WorkerDashBoard";
import Profile from "./Profile";
import Cart from "../core/Cart";
import AdminRoute from "../auth/AdminRoute";
import WorkProviderDashBoard from "../WorkerProvider/WorkProvideDashBoard";
import Work from "../core/Work";
import ManageWorks from "../WorkerProvider/ManageWorks";
import AddWork from "../WorkerProvider/AddWork";
import ViewAcceptedWorks from "../WorkerProvider/ViewAcceptedWorks";
import AddCategory from "../WorkerProvider/AddCategory";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/work/:workId" exact component={Work} />
        <Route exact path="/worksByCategories" component={WorksStore} />
        <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
        <PrivateRoute path="/profile/:userId" exact component={Profile} />
        <AdminRoute
          path="/workprovider/dashboard"
          exact
          component={WorkProviderDashBoard}
        />
         <AdminRoute path="/create/category" exact component={AddCategory} />
        <AdminRoute path="/workprovider/works" exact component={ManageWorks} />
        <AdminRoute path="/workProvider/acceptedWorks" exact component={ViewAcceptedWorks} />
        <AdminRoute path="/create/work" exact component={AddWork} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
