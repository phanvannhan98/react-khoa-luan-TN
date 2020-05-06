import * as types from "../constants/actionType";

export const actSetLoadding = (data) => {
    return {
        type: types.SET_LOADDING,
        data,
    };
};
