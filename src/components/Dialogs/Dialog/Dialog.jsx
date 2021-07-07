import s from './Dialog.module.css'
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    return (
            <NavLink key={props.id} to={'/dialogs/' + props.id}
                activeClassName={s.active}
                className={s.dialogItem}>
                <span>
                    <img className={s.img} src={props.image} />
                </span>
                {props.name}</NavLink>
    )
}

export default DialogItem;