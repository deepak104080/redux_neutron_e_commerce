import { actionTypes } from "../constants/actionTypes";

export const loginReducer = (state = {}, action) => {
    const {type, payload} = action;
    switch(type) {
        case actionTypes.LOGIN:
            return {...state, loginUsername: payload, loginStatus: true}
        default:
            return state;
    }
}