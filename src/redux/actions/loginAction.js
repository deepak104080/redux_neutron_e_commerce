import { actionTypes } from "../constants/actionTypes";

export const loginUser = (username) => {
    return {
        type: actionTypes.LOGIN,
        payload: username
    }
}