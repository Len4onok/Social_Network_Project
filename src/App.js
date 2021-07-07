import React from 'react';
import { connect } from "react-redux";
import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Route } from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { compose } from 'redux';
import { withRouter } from "react-router";
import { initializeApp } from './redux/app-reducer';
import Preloader from './common/preloader';
import store from './redux/store-redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { withSuspense } from './components/hoc/withSuspense';
import { render } from 'react-dom';

//import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
//import ProfileContainer from './components/Profile/ProfileContainer';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {

  componentDidMount = () => {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navigation />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}>
          </Route>
          <Route path='/dialogs' render={withSuspense(DialogsContainer)}>
          </Route>
          <Route path='/users' render={() =>
            <UsersContainer />}>
          </Route>
          <Route path='/login' render={() =>
            <LoginContainer />}>
          </Route>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const AppWithRouter = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default AppWithRouter;