import * as types from "../constants/actionType";
import CallApi from "../utils/apiCaller";
import Axios from "axios";

export const actSetLoadding = (data) => {
    return {
        type: types.SET_LOADDING,
        data,
    };
};

// User
export const actGetUserInfo = (data) => {
    return {
        type: types.GET_USER_INFO,
        data,
    };
};

export const actUpdateUserInfo = (data) => {
    return {
        type: types.UPDATE_USER_INFO,
        data,
    };
};

export const actUpdateUserInfoRequest = (data) => {
    return (dispatch) => {
        dispatch(actSetLoadding(0));
        dispatch(actUpdateUserInfo(data));
        return CallApi("/api/login/edit-user-info", "POST", data).then(() => {
            dispatch(actSetLoadding(100));
            return "oke";
        });
    };
};

export const actGetUserInfoRequest = () => {
    return (dispatch) => {
        dispatch(actSetLoadding(0));
        CallApi("/api/login/user-info").then((res) => {
            res && dispatch(actGetUserInfo(res.data));
            dispatch(actSetLoadding(100));
        });
    };
};

// Subject
export const actGetAllSubject = (data) => {
    return {
        type: types.GET_ALL_SUBJECT,
        data,
    };
};

export const actGetAllSubjectRequest = () => {
    return (dispatch) => {
        dispatch(actSetLoadding(0));
        Axios("/api/subject/getall").then((res) => {
            res && dispatch(actGetAllSubject(res.data));
            dispatch(actSetLoadding(100));
        });
    };
};

// subSubject
export const actGetAllSubSubject = (data) => {
    return {
        type: types.GET_ALL_SUBSUBJECT,
        data,
    };
};

export const actGetAllSubSubjectRequest = () => {
    return (dispatch) => {
        dispatch(actSetLoadding(0));
        Axios("/api/subsubject/getall").then((res) => {
            res && dispatch(actGetAllSubSubject(res.data));
            dispatch(actSetLoadding(100));
        });
    };
};
