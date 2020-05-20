import * as types from "../constants/actionType";
const InitialState = {};

export default (state = InitialState, action) => {
    switch (action.type) {
        case types.GET_USER_INFO:
            state = action.data;
            return { ...state };
        case types.UPDATE_USER_INFO:
            state = { ...state, ...action.data };
            return { ...state };
        default:
            return state;
    }
};
