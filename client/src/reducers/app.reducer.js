import { combineReducers } from "redux";
import loadding from "./loadding.reducer";
import userInfo from "./userInfo.reducer";
import subject from "./subject.reducer";
import subSubject from "./subSubject.reducer";
import teacher from "./teacher.reducer";
import classroom from "./classroom.reducer";
import studentStudying from "./studentStudying.reducer";

export default combineReducers({
    loadding,
    userInfo,
    subject,
    subSubject,
    teacher,
    classroom,
    studentStudying,
});
