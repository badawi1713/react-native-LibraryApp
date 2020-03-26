import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Axios from 'axios';
const URL_STRING = 'http://192.168.100.185:3001/api/v1/genres';
import Login from './src/Screens/Login';
// import Register from './src/Screens/Register';
// import BookDetail from './src/Screens/BookDetail';
import History from './src/Screens/History';
import Profile from './src/Screens/Profile';

import HomeNavbar from './src/Components/Navbar/BottomNavbar';

const Stack = createStackNavigator();
class Navigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />

          {/* <Stack.Screen name="Register" component={Register}/> */}

          <Stack.Screen
            name="History"
            options={{headerShown: true}}
            component={History}
          />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen
            name="Home"
            component={HomeNavbar}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen name="Detail" component={BookDetail}/> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
