import Friend from "./Friend/Friend";
import s from './Friends.module.css'

const Friends = (props) => {
     
     let friends = props.sideBar.friends.map((friend) => {
          return <Friend id={friend.id} name={friend.name} srcAva={friend.srcAva}></Friend>
     }
     )

     return <div className={s.freindsBlock}>
          <div>Друзья</div>
          {friends}
     </div>

}

export default Friends;