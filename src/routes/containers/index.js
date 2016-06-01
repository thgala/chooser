import React, { View, Component } from 'react-native';
import {
  Actions,
  Scene,
  Modal
} from 'react-native-router-flux';

import Auth from 'Chooser/src/auth';
import Navigation from 'Chooser/src/navigation';


export default Actions.create(
  <Scene key="root" hideNavBar={true}>
    {Auth.routes}
    {Navigation.routes}
  </Scene>
)