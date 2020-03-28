import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.topSearchContainer}>
        <Text style={styles.headerTitle}>BOOKZ</Text>
        <Icon name="search" style={styles.searchIcon} />
        <TextInput placeholder="Search..." style={styles.searchInput} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
  },
  topSearchContainer: {
    marginRight: 30,
    marginLeft: 30,
    paddingTop: 30,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchIcon: {
    // backgroundColor: 'red',
    top: -2,
    fontSize: 18,
    left: 50,
    zIndex: 1,
  },
  searchInput: {
    width: '65%',
    paddingLeft: '15%',
    paddingRight: 20,
    backgroundColor: '#E5E6EE',
    fontSize: 18,
    borderRadius: 30,
    color: 'black',
    height: 40,
  },
});
export default HomeHeader;
