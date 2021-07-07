
let SEND_MESSAGE='dialogsPage/SEND_MESSAGE';

let initialState={
    dialogs: [
        { id: 1, name: 'Andrew', srcAva: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-prince-illustration.jpg' },
        { id: 2, name: 'Hvost', srcAva: 'http://sun9-44.userapi.com/s/v1/if1/qw3vWR63rnWIPexrEErujILvop-GpxX8MJRJx1emFNrgy2Ve9Hf3sqh5NLHETJNtyNMxaiTe.jpg?size=200x0&quality=96&crop=18,0,586,594&ava=1' },
        { id: 3, name: 'Kisa', srcAva: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg' },
    ],
    messages: [
        { id: 'qwe', message: 'helloy!', isOwner: 'true' },
        { id: 2, message: 'meow!', isOwner: 'false' },
        { id: 3, message: 'fur fur!!!!', isOwner: 'true' },
    ],
};

const dialogsReducer = (state=initialState, action)=>{
    switch (action.type) {
        case SEND_MESSAGE:{
            let newMessage = {
                id: 5,
                message: action.newMessageText,
                isOwner: 'true',
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        }
        default:
            return state;
    }
}

export const onSendMessage = (newMessageText) =>
    ({ type: SEND_MESSAGE, newMessageText })

export default dialogsReducer;
