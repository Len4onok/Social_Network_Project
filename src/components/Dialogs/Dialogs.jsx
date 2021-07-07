import s from './Dialogs.module.css'
import DialogItem from './Dialog/Dialog';
import MessageItem from './Message/Message';
import  React  from 'react';
import DialogsForm from './DialogsForm';

const Dialogs = (props) => {

const dialogComponents=props.state.dialogs.map((dialog)=>{
    return <DialogItem id={dialog.id} name={dialog.name} image = {dialog.srcAva}></DialogItem>
})

const messageComponents=props.state.messages.map((message)=>{
    return <MessageItem id={message.id} 
    message={message.message} ></MessageItem>
})


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogComponents}
            </div>
            <div className={s.messages}>
                {messageComponents}
               <DialogsForm onSendMessage={props.onSendMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;