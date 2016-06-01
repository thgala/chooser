import React, {
  Component,
  Text,
  View
} from 'react-native';
import Button from 'react-native-button'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'

import Wrap from 'Chooser/src/layouts/components/wrap'
import Logo from 'Chooser/src/auth/components/logo'
import LoginForm from 'Chooser/src/auth/components/loginForm'


const connector = connect(
  state=>({
    routes: state.routes,
    auth: state.auth
  })
)

class Login extends Component {

  constructor(props){
    super(props)
    this.onPress = this.onPress.bind(this)
  }

  onPress(event){

  }

  render() {
    return (
      <View>
        <Wrap>
          <Logo />
          <LoginForm />
          <Button onPress={Actions.passwordReset}>Forgot you password?</Button>
          <Button onPress={Actions.registration}>Go to Registration page</Button>
        </Wrap>
      </View>
    );
  }
}

export default connector(Login)