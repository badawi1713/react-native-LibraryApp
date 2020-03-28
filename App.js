import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/Screens/Login';
// import Register from './src/Screens/Register';
import BookDetail from './src/Screens/BookDetail';
import History from './src/Screens/History';
import Profile from './src/Screens/Profile';

import HomeWithBottomNavbar from './src/Components/Navbar/BottomNavbar';
import BooksByGenre from './src/Screens/BooksByGenre';

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

          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen
            name="Home"
            component={HomeWithBottomNavbar}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Detail"
            options={{headerShown: false}}
            component={BookDetail}
          />
          <Stack.Screen
            name="BooksByGenre"
            options={{headerShown: false}}
            component={BooksByGenre}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
