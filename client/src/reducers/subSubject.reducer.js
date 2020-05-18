import * as types from "../constants/actionType";
const InitialState = [];

export default (state = InitialState, action) => {
    switch (action.type) {
        case types.GET_ALL_SUBSUBJECT:
            state = action.data;
            return [...state];
        default:
            return [...state];
    }
};
