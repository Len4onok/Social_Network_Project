import React from 'react';
import s from './User.module.css';
import userAva from '..//..//assets/images/user.png';
import { NavLink } from 'react-router-dom';


const User = ({ user, followingInProgress, unfollow, follow }) => {

  return <div>
    <div className={s.first}>
      <div>
        <NavLink to={`/profile/${user.id}`}>
          <img alt='avatar' src={user.photos.small != null ? user.photos.small : userAva} />
        </NavLink>
      </div>
      {user.followed ?
        <button
          disabled={followingInProgress.some(id => id === user.id)}
          onClick={() => {
            unfollow(user.id)
          }}>Unfollow</button>
        : <button
          disabled={followingInProgress.some(id => id === user.id)}
          onClick={() => {
            follow(user.id)
          }}>Follow</button>
      }
    </div>
    <div className={s.second}>
      <div>{user.name}</div>
      <div>{user.status}</div>
    </div>
    <div className={s.third}>
      <div>{'user.location.city'}</div>
      <div>{'user.location.country'}</div>
    </div>
  </div>
}

export default User;
