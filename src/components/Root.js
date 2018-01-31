import React from 'react'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux';
import {Route, Switch, Redirect} from 'react-router-dom';

import store from '../configureStore'
import * as actionTypes from '../actions/actionTypes';
import history from '../history';

import TaskPage from './TaskPage/TaskPage';
import Header from './Header/Header';
import SignInPage from './auth/SignInPage';
import SignOutPage from './auth/SignOutPage';
import SignUpPage from './auth/SignUpPage';
import RequireAuth from './auth/RequireAuth';

import '../styles/core/reset.css';
import '../styles/layouts/layout.css';
import '../styles/modules/buttons.css';
import '../styles/modules/typography.css';
import '../styles/modules/form.css';
import '../styles/modules/navigation.css';
import '../styles/modules/spinner.css';
import '../styles/modules/error-message.css';
import '../styles/pages/App.css';
import '../styles/pages/LoginForm.css';
import '../styles/pages/TaskPage.css';


if (localStorage.getItem('token')) {
  store.dispatch({
    type: actionTypes.AUTH_SIGN_IN_SUCCESS
  });
}

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Header/>
        <main className="container">
          <Switch>
            <Route path="/sign-in" component={SignInPage}/>
            <Route path="/sign-out" component={SignOutPage}/>
            <Route path="/sign-up" component={SignUpPage}/>
            <Route path="/tasks" component={RequireAuth(TaskPage)}/>
            <Redirect to="/tasks"/>
          </Switch>
        </main>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default Root;