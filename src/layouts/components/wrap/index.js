import Styles from './styles'

import React, {
  Component,
  View
} from 'react-native';


export default class Wrap extends Component {
  render() {
    return (
      <View style={Styles}>
        {this.props.children}
      </View>
    );
  }
}
