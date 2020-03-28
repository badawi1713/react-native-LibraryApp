import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileNavbar = props => {
  return (
    <View style={styles.header}>
      <View style={styles.ProfileNavbarContainer}>
        <TouchableOpacity activeOpacity={1} onPress={props.backButton}>
          <Icon name="arrow-left" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.navbarTitle}> My Profile </Text>
        <Text style={styles.navbarTitle}>{''}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    elevation: 8,
  },
  ProfileNavbarContainer: {
    marginRight: 30,
    marginLeft: 30,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 24,
    fontWeight: 'normal',
  },
  navbarTitle: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
  },
});
export default ProfileNavbar;
