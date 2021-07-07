import { profileApi } from "../api/api";

let ADD_POST = 'profilePage/ADD_POST';
let GET_PROFILE='profilePage/GET_PROFILE';
let SET_STATUS='profilePage/SET_STATUS';

let initialState={
    posts: [
        { id: 1, message: 'hello!', likeCount: '12', imageSrc: 'http://archilab.online/images/1/123.jpg' },
        { id: 2, message: 'How are you?', likeCount: '2', imageSrc: 'https://skidka02.ru/wp-content/uploads/instagram-avatarka-razmer_31.jpg' },
    ],
    profile: null,
    status: '',
}

const profileReducer = (state=initialState, action)=>{
    switch (action.type) {
        case ADD_POST:
          let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 0,
                imageSrc: 'https://p4.tabor.ru/feed/2017-11-28/16076155/721181_760x500.jpg',
            };
            return {
                ...state, 
                posts:[...state.posts, newPost]
            };  

        case GET_PROFILE:{
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS:{
            return {
                ...state,
                status: action.status
            };
        }   
        default:
            return state;
    }
}

export const addPost = (newPostText) =>({type: ADD_POST, newPostText})

const getProfile = (profile) => ({type: GET_PROFILE, profile})

const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
    const data = await profileApi.get(userId);
    dispatch(getProfile(data));
}

export const getStatus = (userId) => async (dispatch) => {
    const data = await profileApi.getStatus(userId);
    dispatch(setStatus(data));
}

export const updateStatus = (status) => async (dispatch) => {
    const data = await profileApi.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;
