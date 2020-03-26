import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {StyleSheet} from 'react-native';
import Home from '../../Screens/Home';
import History from '../../Screens/History';
import Profile from '../../Screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();

const HomeNavbar = props => {
  // const styles = StyleSheet.create({
  //   bottomNavbar: {
  //     color: 'black',
  //   },
  // });
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({tintColor}) => (
            <Icon name="home" size={30} color={tintColor} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({tintColor}) => (
            <Icon name="history" size={30} color={tintColor} />
          ),
        }}
        name="History"
        component={History}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({tintColor}) => (
            <Icon name="user" size={30} color={tintColor} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};
export default HomeNavbar;
