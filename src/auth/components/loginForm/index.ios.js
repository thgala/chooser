'use strict';
import Styles from './styles'

import React, {
  TextInput,
  Component,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux'


export default class LoginForm extends Component {

  constructor(props){
    super(props)
    this.buttonClicked = this.buttonClicked.bind(this)
    this.state = {
      text: ''
    }
  }

  buttonClicked(event){
    console.log('C L I C K E D');
    console.log('event', event.nativeEvent);
  }

  render() {

    return (
      <View style={{
        padding: 10
      }}>
        <TextInput
          style={Styles.textInput}
          placeholder="Username"
          placeholderTextColor="#fff"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TextInput
          style={Styles.textInput}
          placeholder="Password"
          placeholderTextColor="#fff"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TouchableHighlight
          underlayColor="transparent"
          onPress={Actions.navigation}>
          <View style={Styles.button}>
            <Text
              style={Styles.buttonText}>
              Log In
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
