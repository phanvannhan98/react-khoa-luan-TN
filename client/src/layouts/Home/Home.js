import React, { useCallback, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LoaddingBar from "../../components/LoaddingBar/LoaddingBar";
import * as actions from "../../actions/actions";
import "assets/css/aos.css";
import "assets/css/style.css";
import "assets/scss/home.scss";
import HomeInfo from "views/HomeInfo";
import HeaderNav from "components/HeaderNav/HeaderNav";
import FooterHome from "components/FooterHome/FooterHome";
import StudentInfo from "views/StudentInfo";
import EditStundentInfo from "views/EditStundentInfo";
import Courses from "components/Courses/Courses";

import { StylesProvider } from "@material-ui/styles";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "../../utils/theme";
import callAPI from "utils/apiCaller";
import getToken from "utils/getToken";
import SubSubject from "components/SubSubject/SubSubject";
import Studying from "components/Studying/Studying";

function Home(props) {
    console.log("render");
    const isLoadding = useSelector((state) => state.loadding);
    const teacher = useSelector((state) => state.teacher);
    console.log(teacher);
    const dispatch = useDispatch();

    const setLoadding = useCallback(
        (data) => dispatch(actions.actSetLoadding(data)),
        [dispatch]
    );
    let token = getToken();

    useEffect(() => {
        dispatch(actions.actGetAllSubSubjectRequest());
        dispatch(actions.actGetAllSubjectRequest());
        dispatch(actions.actGetAllTeacherRequest());
    }, [dispatch]);

    const logined = useCallback(
        (isLogined) => {
            if (isLogined) {
                dispatch(actions.actGetUserInfoRequest());
            } else {
                props.history.push("/home/login");
            }
        },
        [dispatch, props.history]
    );

    useEffect(() => {
        callAPI("/api/login/checktoken", "POST").then((res) => {
            logined(res);
        });
    }, [token, logined]);

    return (
        <MuiThemeProvider theme={theme}>
            <StylesProvider>
                <div className="site-wrap">
                    {isLoadding <= 100 && (
                        <LoaddingBar
                            progress={isLoadding}
                            setLoadding={setLoadding}
                        />
                    )}
                    <HeaderNav />
                    <Switch>
                        <Route path="/home" component={HomeInfo} />
                        <Route path="/student-info" component={StudentInfo} />
                        <Route path="/edit-info" component={EditStundentInfo} />
                        <Route exact path="/courses" component={Courses} />
                        <Route
                            exact
                            path="/courses/:id"
                            component={SubSubject}
                        />
                        <Route
                            exact
                            path="/courses/studying/:id"
                            component={Studying}
                        />

                        <Redirect from="*" to="/student-info" />
                    </Switch>

                    <FooterHome {...props} />
                </div>
            </StylesProvider>
        </MuiThemeProvider>
    );
}

export default Home;
