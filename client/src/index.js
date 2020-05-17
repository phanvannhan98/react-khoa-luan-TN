import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import appReducer from "./reducers/app.reducer";
import "assets/css/nucleo-icons.css";

import Home from "layouts/Home/Home.js";
const AdminLayout = lazy(() => import("layouts/Admin/Admin.js"));

const hist = createBrowserHistory();
const store = createStore(appReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router history={hist}>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route
                        path="/admin"
                        render={(props) => <AdminLayout {...props} />}
                    />
                    <Route path="/" render={(props) => <Home {...props} />} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Suspense>
        </Router>
    </Provider>,
    document.getElementById("root")
);
