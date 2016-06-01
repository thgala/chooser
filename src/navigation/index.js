import { combineReducers } from 'redux';
import React, { View, Component, StatusBar } from 'react-native';
import {
  Actions,
  Scene
} from 'react-native-router-flux';

// Reducers

// Navigation Routes
import Feed from 'Chooser/src/feed'

// Support components
// import TabIcon from 'Chooser/src/routes/components/tabIcon'


export default {
  reducer: combineReducers({

  }),
  routes: (
    <Scene key="navigation" hideNavBar={true} tabs={true}>
      {Feed.routes}
    </Scene>
  )
}