import { SIGN_UP } from "../actions/auth.action";

const initalState = {
    token: null,
    userId: null,
    isLoading: false,
}

const authReducer = (state = initalState, action) => {
    switch (action.type) {
        case "SIGN_UP_START":
            return {
                ...state,
                isLoading: true
            }
        case SIGN_UP:
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                isLoading: false
            }
        case "SIGN_UP_FAIL":
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}

export default authReducer;