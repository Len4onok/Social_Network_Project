import s from './Message.module.css'


const MessageItem = (props) => {
    return <div key={props.id}>
        <span id={props.id} 
        className={s.messageItem}>{props.message}</span>
        </div>
}


export default MessageItem;