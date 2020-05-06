import * as types from "../constants/actionType";
const InitialState = 101;

export default (state = InitialState, action) => {
    switch (action.type) {
        case types.SET_LOADDING:
            return (state = action.data);
        default:
            return state;
    }
};
