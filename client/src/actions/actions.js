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
            return;
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
        return Axios.post("/api/teacher/add-teacher", data).then((res) => {
            console.log(res);
            dispatch(actAddNewTeacher(res.data));
            dispatch(actSetLoadding(100));
            return;
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
        return Axios.post("/api/teacher/edit-teacher-info", data).then(
            (res) => {
                dispatch(actSetLoadding(100));
                return;
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
        return Axios.delete("/api/teacher/delete-teacher/" + data).then(
            (res) => {
                dispatch(actSetLoadding(100));
                return;
            }
        );
    };
};
// =>> End Teacher <==

// Class Room
export const actGetAllClassroom = (data) => {
    return {
        type: types.GET_ALL_CLASSROOM,
        data,
    };
};

export const actGetAllClassroomRequest = () => {
    return (dispatch) => {
        dispatch(actSetLoadding(0));
        Axios("/api/classroom").then((res) => {
            res && dispatch(actGetAllClassroom(res.data));
            dispatch(actSetLoadding(100));
        });
    };
};

export const actAddNewClassroom = (data) => {
    return {
        type: types.ADD_NEW_CLASSROOM,
        data,
    };
};

export const actAddNewClassroomRequest = (data) => {
    return (dispatch) => {
        dispatch(actSetLoadding(0));
        return Axios.post("/api/classroom", data).then((res) => {
            dispatch(actAddNewClassroom(res.data));
            dispatch(actSetLoadding(100));
            return;
        });
    };
};

export const actUpdateClassroomInfo = (data) => {
    return {
        type: types.UPDATE_CLASSROOM_INFO,
        data,
    };
};

export const actUpdateClassroomInfoRequest = (data) => {
    return (dispatch) => {
        dispatch(actSetLoadding(0));
        dispatch(actUpdateClassroomInfo(data));
        return Axios.put("/api/classroom", data).then((res) => {
            dispatch(actSetLoadding(100));
            return;
        });
    };
};

export const actDeleteClassroom = (data) => {
    return {
        type: types.DELETE_CLASSROOM,
        data,
    };
};

export const actDeleteClassroomRequest = (data) => {
    return (dispatch) => {
        dispatch(actSetLoadding(0));
        dispatch(actDeleteClassroom(data));
        return Axios.delete("/api/classroom/" + data).then((res) => {
            dispatch(actSetLoadding(100));
            return;
        });
    };
};
// =>> End Class Room <==

// Student Studying
export const actGetAllStudentStudying = (data) => {
    return {
        type: types.GET_ALL_STUDENT_STUDYING,
        data,
    };
};

export const actGetAllStudentStudyingRequest = () => {
    return (dispatch) => {
        dispatch(actSetLoadding(0));
        Axios("/api/student-studying").then((res) => {
            res && dispatch(actGetAllStudentStudying(res.data));
            dispatch(actSetLoadding(100));
        });
    };
};

export const actAddNewStudentStudying = (data) => {
    return {
        type: types.ADD_NEW_STUDENT_STUDYING,
        data,
    };
};

export const actAddNewStudentStudyingRequest = (data) => {
    return (dispatch) => {
        dispatch(actSetLoadding(0));
        return Axios.post("/api/student-studying", data).then((res) => {
            dispatch(actAddNewStudentStudying(res.data));
            dispatch(actSetLoadding(100));
            return;
        });
    };
};

export const actUpdateStudentStudyingInfo = (data) => {
    return {
        type: types.UPDATE_STUDENT_STUDYING_INFO,
        data,
    };
};

export const actUpdateStudentStudyingInfoRequest = (data) => {
    return (dispatch) => {
        dispatch(actSetLoadding(0));
        dispatch(actUpdateStudentStudyingInfo(data));
        return Axios.put("/api/student-studying", data).then((res) => {
            dispatch(actSetLoadding(100));
            return;
        });
    };
};

export const actDeleteStudentStudying = (data) => {
    return {
        type: types.DELETE_STUDENT_STUDYING,
        data,
    };
};

export const actDeleteStudentStudyingRequest = (data) => {
    return (dispatch) => {
        dispatch(actSetLoadding(0));
        dispatch(actDeleteStudentStudying(data));
        return Axios.delete("/api/student-studying/" + data).then((res) => {
            dispatch(actSetLoadding(100));
            return;
        });
    };
};
// =>> End Student Studying <==
