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


export default class ResetPasswordForm extends Component {

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
          placeholder="Enter your email"
          placeholderTextColor="#fff"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TouchableHighlight
          underlayColor="transparent"
          onPress={this.buttonClicked.bind(this)}>
          <View style={Styles.button}>
            <Text
              style={Styles.buttonText}>
              Reset password
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
