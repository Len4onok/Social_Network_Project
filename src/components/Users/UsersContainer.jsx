import { connect } from "react-redux";
import {  setCurrentPage, requestUsers, follow, unfollow, } from "../../redux/users-reducer";
import React from 'react';
import Users from "./Users";
import { getCountUserOnPage, getCurrentPage, getFollowingInProgress, getIsFetching, getTotalCount, getUsers } from "../../redux/selectors/users-selectors";

class UsersAPIContainer extends React.Component {
    
    
    componentDidMount = () => {
        this.props.requestUsers(this.props.countUserOnPage, this.props.currentPage);
    }

    render() {
        return (
            <Users {...this.props}
            />
        )
    }
}



let mapStateToProps=(state)=>{
    return {
        users: getUsers(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        countUserOnPage: getCountUserOnPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default connect(mapStateToProps, {
    setCurrentPage, requestUsers, follow, unfollow
})(UsersAPIContainer)

