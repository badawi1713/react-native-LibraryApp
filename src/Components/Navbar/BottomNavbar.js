import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {StyleSheet} from 'react-native';
import Home from '../../Screens/Home';
import History from '../../Screens/History';
import Profile from '../../Screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();

const HomeWithBottomNavbar = props => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: () => <Icon name="home" size={30} color={'#3c3c3c'} />,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: () => <Icon name="history" size={30} color={'#3c3c3c'} />,
        }}
        name="History"
        component={History}
      />
      <Tab.Screen
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: () => <Icon name="user" size={30} color={'#3c3c3c'} />,
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};
export default HomeWithBottomNavbar;
