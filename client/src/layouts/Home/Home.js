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

function Home(props) {
    console.log("render");
    const isLoadding = useSelector((state) => state.loadding);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.actGetUserInfoRequest());
        dispatch(actions.actGetAllSubjectRequest());
        dispatch(actions.actGetAllSubSubjectRequest());
    }, [dispatch]);

    const setLoadding = useCallback(
        (data) => dispatch(actions.actSetLoadding(data)),
        [dispatch]
    );
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
                        <Route path="/courses" component={Courses} />

                        <Redirect from="*" to="/home/login" />
                    </Switch>

                    <FooterHome />
                </div>
            </StylesProvider>
        </MuiThemeProvider>
    );
}

export default Home;
