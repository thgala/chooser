import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Router,
  Scene
} from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import Reducers from './src/reducers';
import Routes from './src/routes/containers';


const RouterWithRedux = connect()(Router);
const middleware = [/* ...your middleware (i.e. thunk) */];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(Reducers);


class Chooser extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux scenes={Routes} />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Chooser', () => Chooser);