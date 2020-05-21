import * as types from "../constants/actionType";
const InitialState = [];

export default (state = InitialState, action) => {
    const { type, data } = action;
    switch (type) {
        case types.GET_ALL_TEACHER:
            state = data;
            return [...state];
        case types.ADD_NEW_TEACHER:
            state = [...state, data];
            return [...state];
        case types.UPDATE_TEACHER_INFO:
            for (var i = 0; i < state.length; i++) {
                if (state[i]._id === data._id) {
                    state[i] = data;
                }
            }
            return [...state];
        case types.DELETE_TEACHER:
            state = state.filter((v) => v._id !== data);
            return [...state];
        default:
            return state;
    }
};
