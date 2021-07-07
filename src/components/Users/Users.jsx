import React from 'react';
import Preloader from '../../common/preloader';
import Paginator from '../../common/Paginator';
import User from './User';

const Users = (props) => {

  const UsersElements = props.users.map((user, index) => {
    return <User key={index} user={user}
      followingInProgress={props.followingInProgress}
      unfollow={props.unfollow}
      follow={props.follow} />
  })

  return <div>
    {props.isFetching && <Preloader />}
    <Paginator totalCount={props.totalCount}
      countItemsOnPage={props.countUserOnPage}
      requestUsers={props.requestUsers}
      setCurrentPage={props.setCurrentPage}
      currentPage={props.currentPage} 
      portionSize={10}
      />
    {UsersElements}
  </div>
}


export default Users;
