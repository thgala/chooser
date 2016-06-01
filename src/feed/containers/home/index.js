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

class Home extends React.Component {
  render () {
    return (
      <NavigationWrap>
        <View>
          <Button style={{
            padding: 100
          }} onPress={Actions.feed_post}>My single post!</Button>
        </View>
      </NavigationWrap>
    );
  }
}

export default connector(Home)