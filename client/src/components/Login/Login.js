import React, { useState, useCallback } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../../actions/actions";
import axios from "axios";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isRedirect, setIsRedirect] = useState("");
    const [isShowPass, setIsShowPass] = useState(false);

    const dispatch = useDispatch();

    const setLoadding = useCallback(
        (data) => dispatch(actions.actSetLoadding(data)),
        [dispatch]
    );

    // useEffect(() => {
    //     let token =
    //         document.cookie &&
    //         document.cookie.split(";").find((n) => n.includes("authorization"))
    //             ? document.cookie
    //                   .split(";")
    //                   .find((n) => n.includes("authorization"))
    //                   .split("=")[1]
    //             : "";

    //     if (token) {
    //         setIsRedirect(true);
    //     }
    // }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        setLoadding(1);
        if (username && password)
            axios.post("/api/login/", { username, password }).then((doc) => {
                if (doc.data) {
                    document.cookie = `authorization=${doc.data}; path=/`;
                }
                setLoadding(100);
                setIsRedirect(doc.data);
            });
        else setLoadding(100);
    };

    if (isRedirect) {
        return <Redirect to="/student-info" />;
    }

    return (
        <form className="form-box" onSubmit={onSubmit}>
            <h3 className="h4 text-black mb-4 text-uppercase">Login</h3>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Email Addresss"
                    name="username"
                    value={username}
                    required
                    onChange={(e) => {
                        setUsername(e.currentTarget.value);
                        setIsRedirect("");
                    }}
                />
            </div>
            <div className="form-group mb-4 position-relative">
                <input
                    type={!isShowPass ? "password" : "text"}
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={password}
                    required
                    onChange={(e) => {
                        setPassword(e.currentTarget.value);
                        setIsRedirect("");
                    }}
                />
                <span
                    className="btn-show-pass"
                    onClick={() => {
                        setIsShowPass(!isShowPass);
                    }}
                >
                    {!isShowPass ? (
                        <img src={require("assets/img/look.svg")} alt="x" />
                    ) : (
                        <img src={require("assets/img/eye.svg")} alt="x" />
                    )}
                </span>
            </div>
            <div className="form-group">
                <input
                    type="submit"
                    className="btn btn-primary btn-pill"
                    value="LOGIN"
                />
            </div>
            <label
                className="h6"
                style={{
                    ...{
                        display: "block",
                        color: "#f53f3f",
                        cursor: "default",
                        fontSize: "14px",
                        fontWeight: "bold",
                    },
                    opacity: `${isRedirect === false ? 1 : 0}`,
                }}
            >
                Login failed <br />
                Username or Password is incorrect.
            </label>
            <label className="text-black">
                Don’t have an account?{" "}
                <Link
                    className="text-uppercase font-weight-bold"
                    to="/home/signup"
                >
                    Sign Up
                </Link>
            </label>
        </form>
    );
}

export default Login;
