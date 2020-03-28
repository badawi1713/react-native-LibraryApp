import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import HomeHeader from '../Components/Header/HomeHeader';
import GenreCard from '../Components/Card/GenreCard';
import BookCard from '../Components/Card/BookCard';

class Home extends Component {
  state = {
    bookData: [],
  };

  detailPageHandler = id => {
    this.props.navigation.push('Detail', {id: id});
  };

  render() {
    return (
      <View style={styles.homeContainer}>
        <HomeHeader />

        <GenreCard />
        <View style={styles.contentTitleContainer}>
          <Text style={styles.contentTitle}>Popular Books</Text>
        </View>

        <BookCard onPress={this.detailPageHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentTitleContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: 'white',
    paddingTop: 30,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Home;
