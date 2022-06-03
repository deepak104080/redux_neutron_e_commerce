import { actionTypes } from "../constants/actionTypes";

export const loginReducer = (state = {}, action) => {
    const {type, payload} = action;
    switch(type) {
        case actionTypes.LOGIN:
            return {...state, loginUsername: payload, loginStatus: true}
        case actionTypes.LOGOUT:
            return {...state, loginUsername: '', loginStatus: false}
        default:
            return state;
    }
}
