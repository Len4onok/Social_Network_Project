import { followApi, usersApi } from "../api/api";
import { updateObjectInArray } from "../helpers/object-helpers";

let FOLLOW = 'usersPage/FOLLOW';
let UNFOLLOW = 'usersPage/UNFOLLOW';
let SET_USERS = 'usersPage/SET_USERS';
let SET_CURRENT_PAGE = 'usersPage/SET_CURRENT_PAGE';
let SET_TOTAL_COUNT = 'usersPage/SET_TOTAL_COUNT';
let TOGGLE_IS_FETCHING = 'usersPage/TOGGLE_IS_FETCHING';
let BUTTON_BLOCK = 'usersPage/BUTTON-BLOCK';

let initialState = {
    users: [],
    totalCount: 100,
    currentPage: 1,
    countUserOnPage: 10,
    isFetching: false,
    buttonBlockArray: [],
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, 'id',
                    action.userId, { followed: true })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, 'id',
                    action.userId, { followed: false })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state, totalCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case BUTTON_BLOCK: 
            return {
                ...state,
                buttonBlockArray: action.block
                    ? [...state.buttonBlockArray, action.id]
                    : state.buttonBlockArray.filter(id => id !== action.id)
            }
        default:
            return state;
    }
}

const followAC = (userId) => ({ type: FOLLOW, userId })
const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })

const setUsers = (users) => ({ type: SET_USERS, users })

export const setCurrentPage = (currentPage) =>
    ({ type: SET_CURRENT_PAGE, currentPage })

const setTotalCount = (totalCount) =>
    ({ type: SET_TOTAL_COUNT, totalCount })

const toggleIsFetching = (isFetching) =>
    ({ type: TOGGLE_IS_FETCHING, isFetching })

export const toggleIsFollowingProgress = (block, id) =>
    ({ type: BUTTON_BLOCK, block, id })

export const requestUsers = (countUserOnPage, currentPage) =>
    async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const data = await usersApi.getUsers(countUserOnPage, currentPage)
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
        dispatch(toggleIsFetching(false));
    }

const followUnfollowFlow = async (dispatch, methodApi, id, actionCreator) => {
    dispatch(toggleIsFollowingProgress(true, id));
    let data = await methodApi(id);
    dispatch(toggleIsFollowingProgress(false, id));
    if (data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
}

export const follow = (id) => async (dispatch) => {
    followUnfollowFlow(dispatch, followApi.post.bind(followApi), id, followAC)
}

export const unfollow = (id) => async (dispatch) => {
    followUnfollowFlow(dispatch, followApi.delete.bind(followApi), id, unfollowAC)
}


export default usersReducer;
