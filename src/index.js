import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/css/nucleo-icons.css";

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
            <Route
                render={(props) => (
                    <div style={{ color: "white" }}>NOT FOUND</div>
                )}
            />
            <Redirect from="/" to="/admin/dashboard" />
        </Switch>
    </Router>,
    document.getElementById("root")
);
