import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/css/nucleo-icons.css";
import LoginPage from "layouts/Login/LoginPage";
import Register from "layouts/Register/Register";

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route
                path="/admin"
                render={(props) => <AdminLayout {...props} />}
            />
            <Route
                exact
                path="/home"
                render={(props) => <div style={{ color: "white" }}>Hello</div>}
            />
            <Route exact path="/login" render={(props) => <LoginPage />} />
            <Route exact path="/register" render={(props) => <Register />} />

            <Redirect from="/" to="/login" />
        </Switch>
    </Router>,
    document.getElementById("root")
);
