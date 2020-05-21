import { combineReducers } from "redux";
import loadding from "./loadding.reducer";
import userInfo from "./userInfo.reducer";
import subject from "./subject.reducer";
import subSubject from "./subSubject.reducer";
import teacher from "./teacher.reducer";

export default combineReducers({
    loadding,
    userInfo,
    subject,
    subSubject,
    teacher,
});
