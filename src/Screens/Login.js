import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Login extends Component {
  signInHandler = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <View style={styles.loginContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerFont}>Here To Get Welcomed !</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput style={styles.loginForm} placeholder="Your Email" />
          <TextInput style={styles.loginForm} placeholder="Password" />
        </View>
        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>Sign In</Text>
          <Icon
            name="arrow-right"
            size={30}
            color="#000"
            onPress={this.signInHandler}
          />
          {/* <FontAwesomeIcon icon={faCoffee} /> */}
        </View>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Sign Up</Text>
          <Text style={styles.signUpText}>Forgot Password</Text>
        </View>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  loginContainer: {backgroundColor: 'white', flex: 1},
  headerContainer: {
    marginRight: 30,
    marginLeft: 30,
    backgroundColor: 'white',
    paddingTop: 100,
    paddingBottom: 20,
  },
  headerFont: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4B4C72',
  },
  formContainer: {
    marginRight: 30,
    marginLeft: 30,
    backgroundColor: 'white',
    paddingTop: 60,
    paddingBottom: 10,
  },
  loginForm: {
    borderBottomColor: '#B5B5C9',
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 30,
    fontSize: 18,
  },
  signInContainer: {
    marginRight: 30,
    marginLeft: 30,
    // backgroundColor: 'yellow',
    paddingTop: 0,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  signInText: {fontSize: 22},
  signUpContainer: {
    marginRight: 30,
    marginLeft: 30,
    backgroundColor: 'white',
    paddingTop: 60,
    paddingBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  signUpText: {
    textDecorationLine: 'underline',
    fontSize: 18,
  },
});
