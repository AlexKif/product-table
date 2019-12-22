import React from 'react';
import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import Login from "../components/Login/Login";
import Products from "../components/Products/Products";
import {connect} from "react-redux";

class AppRouter extends React.Component {

    render() {

        const {authorization} = this.props;
        const token = localStorage.getItem('token');

        return (
            <Router>
                {authorization.login || token ? (
                    <Switch>
                        <Route path="/">
                            <Products/>
                        </Route>
                    </Switch>
                    ) :
                    <Switch>
                        <Route path="/">
                            <Redirect to="/"/>
                            <Login/>
                        </Route>
                    </Switch>
                }
            </Router>
        );
    }
}

const mapStateToProps = ({loginReducer}) => {
    return {
        authorization: loginReducer
    }
};

export default connect(mapStateToProps)(AppRouter);
