import React, { PropTypes, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux'


const connector = connect(
  state=>({
    routes: state.routes,
    auth: state.auth
  })
)

class Registration extends React.Component {
  render () {

    console.log('registration props', this.props);

    return (
      <View>
        <Button style={{
          padding: 100
        }} onPress={Actions.pop}>Back</Button>
      </View>
    );
  }
}

export default connector(Registration)