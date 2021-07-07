import { authApi } from "../api/api";

let SET_AUTH_USER_DATA='auth/SET_AUTH_USER_DATA';
let TOGGLE_IS_LOGIN_SUCCESS='auth/TOGGLE_IS_LOGIN_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isLoginSuccess: false,
    logInErrorMessage: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case TOGGLE_IS_LOGIN_SUCCESS:
            return {
                ...state,
                isLoginSuccess: action.isLoginSuccess,
                logInErrorMessage: action.logInErrorMessage,
            }
        default:
            return state;
    }
}


const setAuthUserId = (userId, email, login, isAuth) =>
({
    type: SET_AUTH_USER_DATA,
    data: {userId, email, login, isAuth}
})

const toggleIsLoginSuccess=(isLoginSuccess, logInErrorMessage)=>({
    type: TOGGLE_IS_LOGIN_SUCCESS,
    isLoginSuccess,
    logInErrorMessage
})

export const authUserThunkCreator = () => async (dispatch) => {
    const data = await authApi.get();
    if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserId(id, email, login, true));
    }
}

export const logIn = (values) => async (dispatch) => {
    const data = await authApi.post(values)
    if (data.resultCode === 0) {
        dispatch(authUserThunkCreator());
        dispatch(toggleIsLoginSuccess(true, null))
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(toggleIsLoginSuccess(false, message))
    }
}

export const logOut = () => async (dispatch) => {
    const data = await authApi.delete();
    if (data.resultCode === 0) {
        dispatch(setAuthUserId(null, null, null, false));
    }
}

export default authReducer;
