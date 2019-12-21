import React from 'react';
import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import Login from "../components/Login/Login";
import Products from "../components/Products/Products";


function AppRouter(props) {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Login/>
                </Route>
                <Route path="/products">
                    <Products/>
                </Route>
                <Switch/>
            </Switch>
        </Router>
    );
}

export default AppRouter;
