import React, {Component} from 'react';
import {
  SafeAreaView,
  Image,
  View,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';

const URL_STRING = 'http://192.168.100.185:3001/api/v1/books';
import Axios from 'axios';

class BookCard extends Component {
  state = {
    bookData: [],
  };
  componentDidMount = () => {
    this.getBookData();
  };

  getBookData = () => {
    Axios.get(URL_STRING)
      .then(({data}) => {
        this.setState({bookData: data.data});
      })
      .catch(err => console.log(err));
  };

  renderBookItem = ({item, index}) => {
    // console.log('image', this.state.genreData[0].genreImage);

    return (
      // <View style={(styles.item, {backgroundColor: {color}})}>
      <View>
        <View style={[styles.photoContainer]}>
          <Image source={{uri: item.imageURL}} />
        </View>
        <View style={styles.infoTextContainer}>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
            {item.title}
          </Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={this.state.bookData}
          renderItem={this.renderBookItem}
          keyExtractor={item => String(item.id)}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'grey',
    alignItems: 'center',
    marginLeft: 0,
  },
  photoContainer: {
    borderRadius: 10,
    width: 160,
    height: 200,
    marginVertical: 5,
    marginRight: 15,
    flexDirection: 'row',

    backgroundColor: 'red',
  },
  infoTextContainer: {
    // backgroundColor: 'yellow',
    width: 160,
    marginBottom: 15,
  },
  title: {
    fontSize: 15,
    textAlign: 'left',
    fontWeight: 'bold',
  },
});

export default BookCard;
