import React, { PropTypes, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import NavigationTabs from 'Chooser/src/navigation/components/navigationTabs';
import NavigationWrap from 'Chooser/src/layouts/components/navigationWrap';


const connector = connect(
  state=>({
    routes: state.routes,
    auth: state.auth
  })
)

class Post extends React.Component {
  render () {
    return (
      <NavigationWrap>
        <View>
          <Button style={{
            padding: 100
          }} onPress={Actions.pop}>My feed!</Button>
        </View>
      </NavigationWrap>
    );
  }
}

export default connector(Post)