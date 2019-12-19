import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Login from "../components/Login/Login";
import Products from "../components/Products/Products";


function AppRouter(props) {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/products">
                    <Products />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;