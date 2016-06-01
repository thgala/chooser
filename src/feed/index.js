import { combineReducers } from 'redux';
import React, { View, Component, StatusBar } from 'react-native';
import {
  Actions,
  Scene
} from 'react-native-router-flux';

// Reducers
import feedHome from './reducers/feedHome';

// Routes
import Home from './containers/home'
import Post from './containers/post'

// Support components
import TabIcon from 'Chooser/src/routes/components/tabIcon'

export default {
  reducer: combineReducers({
    feedHome
  }),
  routes: (
    <Scene
      key="feed"
      title="Feed"
      hideNavBar={true}
      icon={TabIcon}>
      <Scene
        key="feed_home"
        component={Home}
        title="Feed Home" />
      <Scene
        key="feed_post"
        component={Post}
        title="Feed Ptos" />
    </Scene>
  )
}