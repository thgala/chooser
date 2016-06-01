import React, { PropTypes, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import Tabs from 'react-native-tabs';


const connector = connect(
  state=>({
    routes: state.routes,
    auth: state.auth
  })
)

class NavigationTabs extends React.Component {

  onSelect(el){
    console.log('el', el);
  }

  render () {

    console.log('navigation Tabs Tabs Tabs props', this.props);

    return (
      <View>
        <Tabs
          style={{backgroundColor:'white'}}
          selectedStyle={{color:'red'}}
          onSelect={this.onSelect}>
            <Text name="feed">Feed</Text>
            <Text name="search">Search</Text>
            <Text name="photo">Photo</Text>
            <Text name="likes">Likes</Text>
            <Text name="account">Account</Text>
        </Tabs>
      </View>
    );
  }
}

export default connector(NavigationTabs)