import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


let storeOld = {
    _subscriber() {
        console.log('no subscribers (observers')
    },
    _state: {
        profilePage:
        {
            posts: [
                { id: 1, message: 'hello!', likeCount: '12', imageSrc: 'http://archilab.online/images/1/123.jpg' },
                { id: 2, message: 'How are you?', likeCount: '2', imageSrc: 'https://skidka02.ru/wp-content/uploads/instagram-avatarka-razmer_31.jpg' },
            ],
            newPostText: '',
        },
        dialogsPage:
        {
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
            newMessageText: '2226',
        },
        sideBar: {
            friends:
                [
                    { id: 1, name: 'Andrew', srcAva: 'https://vorchuchelo.com/wp-content/gallery/cats/cache/Mimimi-kisa-prosnulas.jpg-nggid0510662-ngg0dyn-0x0x100-00f0w010c010r110f110r010t010.jpg?189db0&189db0g' },
                    { id: 2, name: 'Kisa', srcAva: 'https://cs8.pikabu.ru/post_img/big/2017/03/19/10/1489941030196667357.jpg' },
                    { id: 3, name: 'Murisa', srcAva: 'https://p4.tabor.ru/feed/2017-11-28/16076155/721181_760x500.jpg' },
                ]
        }

    },
    getState() {
        return this._state;
    },


    dispatch(action) {
        this._state.profilePage=profileReducer(this._state.profilePage, action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action);
        this._subscriber(this._state);
    },

    subscribe (observer) {
        this._subscriber = observer;
    }
}


export default storeOld;