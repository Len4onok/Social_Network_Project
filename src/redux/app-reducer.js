import { authUserThunkCreator } from "./auth-reducer";

let INITIALAZED_SUCCESS='app/INITIALAZED_SUCCESS';

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALAZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        
        default:
            return state;
    }
}

const initializedSuccess = () =>
({type: INITIALAZED_SUCCESS})

export const initializeApp = () => async (dispatch) => {
    let promise = dispatch(authUserThunkCreator());
    await Promise.all([promise])
    dispatch(initializedSuccess())
}

export default appReducer;
