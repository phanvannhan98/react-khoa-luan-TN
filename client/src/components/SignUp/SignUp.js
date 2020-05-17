import React, { useState, useCallback } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../../actions/actions";
import axios from "axios";

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [isRedirect, setIsRedirect] = useState("");

    const [errorL, setErrorL] = useState(false);

    const dispatch = useDispatch();

    const setLoadding = useCallback(
        (data) => dispatch(actions.actSetLoadding(data)),
        [dispatch]
    );

    const onSubmit = (e) => {
        e.preventDefault();
        setLoadding(1);
        if (username && password && repassword) {
            if (username.length < 7 || username.length > 20) {
                username.length < 7
                    ? setErrorL("Register failed Username is too short!")
                    : setErrorL("Register failed Username is too long!");
                setLoadding(100);
            } else if (password === repassword) {
                axios
                    .post("/api/login/register", { username, password })
                    .then((doc) => {
                        if (doc.data) {
                            setLoadding(100);
                            setIsRedirect(true);
                        } else {
                            setLoadding(100);
                            setErrorL("Register failed \nUsername is exist");
                        }
                    });
            } else {
                setLoadding(100);
                setErrorL("Register failed \nPassword doesn't match ");
            }
        } else setLoadding(100);
    };

    if (isRedirect) return <Redirect to="/home/login" />;

    return (
        <form className="form-box" onSubmit={onSubmit}>
            <h3 className="h4 text-black mb-4 text-uppercase">Sign Up</h3>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    required
                    onChange={(e) => {
                        setUsername(e.currentTarget.value);
                        setIsRedirect("");
                        setErrorL("");
                    }}
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={password}
                    required
                    onChange={(e) => {
                        setPassword(e.currentTarget.value);
                        setIsRedirect("");
                        setErrorL("");
                    }}
                />
            </div>
            <div className="form-group mb-4">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Re-type Password"
                    name="password"
                    value={repassword}
                    required
                    onChange={(e) => {
                        setRepassword(e.currentTarget.value);
                        setIsRedirect("");
                        setErrorL("");
                    }}
                />
            </div>
            <div className="form-group">
                <input
                    type="submit"
                    className="btn btn-primary btn-pill"
                    value="Sign up"
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
                        whiteSpace: "pre",
                    },
                    opacity: `${errorL ? 1 : 0}`,
                }}
            >
                {errorL}
            </label>

            <label className="text-black">
                Do have an account?{" "}
                <Link
                    className="text-uppercase font-weight-bold"
                    to="/home/login"
                >
                    Login
                </Link>
            </label>
        </form>
    );
}

export default SignUp;
