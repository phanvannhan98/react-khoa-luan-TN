import React, { useCallback } from "react";
import Login from "../../views/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SignUp from "views/SignUp";
import LoaddingBar from "../../components/LoaddingBar/LoaddingBar";
import * as actions from "../../actions/actions";
import "assets/css/aos.css";
import "assets/css/style.css";
import HeaderNav from "components/HeaderNav/HeaderNav";
import UserProfile from "views/UserProfile";

function School() {
    return <UserProfile />;
}

export default School;
