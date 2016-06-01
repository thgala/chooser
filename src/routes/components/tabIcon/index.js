import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class TabIcon extends React.Component {
  render(){
    return (
      <View>
        <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
      </View>
    );
  }
}