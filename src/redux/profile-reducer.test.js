import profileReducer, { addPost } from "./profile-reducer"


let state={
    posts: [
        { id: 1, message: 'hello!', likeCount: '12', imageSrc: 'http://archilab.online/images/1/123.jpg' },
        { id: 2, message: 'How are you?', likeCount: '2', imageSrc: 'https://skidka02.ru/wp-content/uploads/instagram-avatarka-razmer_31.jpg' },
    ]
}

it ('adding new post increase posts array length', ()=>{
    let action=addPost('newPostText');
    let newState=profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
})

it ('new post text should be correct', ()=>{
    let action=addPost('newPostText');
    let newState=profileReducer(state, action);
    expect(newState.posts[2].message).toBe('newPostText');
})