import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Home from "./home/home.js";
import Login from "./login/login.js";

class AppRouter extends Component {
    render(){
        const rootPath = "/hrsy"; 
        return (
            <Router>
                <div>
                    <Route exact path={rootPath+"/"} component={Home} />
                    <Route path={rootPath+"/login" } component={Login} />
                </div>
                <Redirect from="/*" to={rootPath+"/login"} />
            </Router>
        )
    }
}

export default AppRouter;