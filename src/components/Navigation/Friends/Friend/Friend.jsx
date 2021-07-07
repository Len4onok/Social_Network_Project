import s from './Friend.module.css'

const Friend =(props)=>{
    return <div className={s.friendItem} key={props.id}>
        <img src={props.srcAva}></img>
        <div>{props.name}</div>
    </div>
}

export default Friend;