import * as types from "../constants/actionType";
const InitialState = [];

export default (state = InitialState, action) => {
    switch (action.type) {
        case types.GET_ALL_SUBJECT:
            state = action.data.sort(
                (a, b) => a.numberOflevel - b.numberOflevel
            );
            return [...state];
        default:
            return state;
    }
};
