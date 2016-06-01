import Styles from './styles'

import React, {
  Component,
  View
} from 'react-native';


export default class NavigationWrap extends Component {
  render() {
    return (
      <View style={Styles}>
        {this.props.children}
      </View>
    );
  }
}
