import  React  from 'react';
import { getStatus, getUserProfileThunkCreator, updateStatus } from './../../redux/profile-reducer';
import Profile from './Profile';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from 'redux';



class ProfileContainer extends React.Component  {

  componentDidMount = () => {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId
      if (!userId) { this.props.history.push('/login') }
    }

    this.props.getUserProfileThunkCreator(userId);
    this.props.getStatus(userId);
}

  render() {
    return <Profile {...this.props} />;
  }
  
}

const mapStateToProps=(state)=>{
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  }
}

export default compose(
  connect(mapStateToProps, { getUserProfileThunkCreator, getStatus, updateStatus}),
  withRouter,
  )(ProfileContainer)


