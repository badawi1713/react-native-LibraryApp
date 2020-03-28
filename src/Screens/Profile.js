import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ProfileNavbar from '../Components/Navbar/ProfileNavbar';
class Profile extends Component {
  backButtonHandler = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <View style={styles.container}>
        <ProfileNavbar backButton={this.backButtonHandler} />
        <View style={styles.profileContentContainer}>
          <Text>Hello My Name is "Full name"</Text>
        </View>
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1},
  profileContentContainer: {
    // backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
