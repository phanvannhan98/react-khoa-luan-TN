import React, { useEffect } from "react";
import callAPI from "utils/apiCaller";

function CheckLogin(props) {
    useEffect(() => {
        callAPI("/api/login/checktoken", "POST").then((res) => {
            !res && props.history.push("/home/login");
        });
    }, [props.history]);
    return <></>;
}

export default CheckLogin;
