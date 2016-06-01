import { combineReducers } from 'redux';
import React, { View, Component, StatusBar } from 'react-native';
import {
  Actions,
  Scene
} from 'react-native-router-flux';

// Reducers
import login from './reducers/login';

// Routes
import Login from './containers/login'
import Registration from './containers/registration'
import PasswordReset from './containers/passwordReset'

// Support components
import TabIcon from 'Chooser/src/routes/components/tabIcon'


export default {
  reducer: combineReducers({
    login
  }),
  routes: (
    <Scene key="auth" hideNavBar={true}>
      <Scene
        key="login"
        component={Login}
        title="Login" />
      <Scene
        key="registration"
        component={Registration}
        title="Registration" />
      <Scene
        key="passwordReset"
        component={PasswordReset}
        title="PasswordReset" />
    </Scene>
  )
}