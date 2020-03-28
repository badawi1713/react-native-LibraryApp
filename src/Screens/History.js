import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import HistoryNavbar from '../Components/Navbar/HistoryNavbar';
class History extends Component {
  backButtonHandler = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={styles.container}>
        <HistoryNavbar backButton={this.backButtonHandler} />
        <View style={styles.historyContentContainer}>
          <View>
            <Image
              style={{width: 300, height: 200}}
              source={require('../../assets/history_empty.png')}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default History;

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1},
  historyContentContainer: {
    // backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
