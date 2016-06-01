import React, {
  PropTypes,
  Text,
  View,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux'

import Wrap from 'Chooser/src/layouts/components/wrap'
import Logo from 'Chooser/src/auth/components/logo'
import ResetPasswordForm from 'Chooser/src/auth/components/resetPasswordForm'


const connector = connect(
  state=>({
    routes: state.routes,
    auth: state.auth
  })
)

class PasswordReset extends React.Component {
  render () {
    return (
      <View>
        <StatusBar
          showHideTransition="fade"
          hidden={true}/>

        <Wrap>
          <Logo />
          <ResetPasswordForm />
          <Button style={{
            padding: 100
          }} onPress={Actions.pop}>Back (reset)</Button>
        </Wrap>
      </View>
    );
  }
}

export default connector(PasswordReset)