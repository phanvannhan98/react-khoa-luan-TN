import * as types from "../constants/actionType";
import CallApi from "../utils/apiCaller";
import Axios from "axios";

// Loading-bar
export const actSetLoadding = (data) => {
    return {
        type: types.SET_LOADDING,
        data,
    };
};
// =>> End Loading-bar <==

// User
export const actGetUserInfo = (data) => {
    return {
        type: types.GET_USER_INFO,
        data,
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
// =>> End User <==

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
// =>> End Subject <==

// Sub Subject
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
// =>> End Sub Subject <==

// Teacher
export const actGetAllTeacher = (data) => {
    return {
        type: types.GET_ALL_TEACHER,
        data,
    };
};

export const actGetAllTeacherRequest = () => {
    return (dispatch) => {
        dispatch(actSetLoadding(0));
        Axios("/api/teacher/getall").then((res) => {
            res && dispatch(actGetAllTeacher(res.data));
            dispatch(actSetLoadding(100));
        });
    };
};

export const actAddNewTeacher = (data) => {
    return {
        type: types.ADD_NEW_TEACHER,
        data,
    };
};

export const actAddNewTeacherRequest = (data) => {
    return (dispatch) => {
        dispatch(actSetLoadding(0));
        return CallApi("/api/teacher/add-teacher", "POST", data).then((res) => {
            dispatch(actAddNewTeacher(res.data));
            dispatch(actSetLoadding(100));
            return "oke";
        });
    };
};

export const actUpdateTeacherInfo = (data) => {
    return {
        type: types.UPDATE_TEACHER_INFO,
        data,
    };
};

export const actUpdateTeacherInfoRequest = (data) => {
    return (dispatch) => {
        dispatch(actSetLoadding(0));
        dispatch(actUpdateTeacherInfo(data));
        return CallApi("/api/teacher/edit-teacher-info", "POST", data).then(
            (res) => {
                dispatch(actSetLoadding(100));
                return "oke";
            }
        );
    };
};

export const actDeleteTeacher = (data) => {
    return {
        type: types.DELETE_TEACHER,
        data,
    };
};

export const actDeleteTeacherRequest = (data) => {
    return (dispatch) => {
        dispatch(actSetLoadding(0));
        dispatch(actDeleteTeacher(data));
        return CallApi("/api/teacher/delete-teacher/" + data, "DELETE").then(
            (res) => {
                dispatch(actSetLoadding(100));
                return "oke";
            }
        );
    };
};
// =>> End Teacher <==
