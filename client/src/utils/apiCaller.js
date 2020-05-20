import axios from "axios";
import getToken from "./getToken";

const callAPI = (endpoint, method = "GET", body) => {
    const token = getToken();
    if (token !== "") {
        return axios({
            method: method,
            url: endpoint,
            data: body,
            headers: {
                authorization: token,
                accept: "application/json",
            },
        })
            .then((data) => {
                if (!data.data) {
                    return false;
                } else {
                    return data;
                }
            })
            .catch((err) => {
                console.log(err.err);
            });
    } else {
        return new Promise((res, rej) => {
            res(false);
        });
    }
};

export default callAPI;
