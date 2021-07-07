import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import appReducer from "./app-reducer";

let reducers=combineReducers({
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth: authReducer,
    dialogsPage: dialogsReducer,
    app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));


export default store;