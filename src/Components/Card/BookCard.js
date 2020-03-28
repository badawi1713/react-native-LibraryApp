import React, {Component} from 'react';
import {
  SafeAreaView,
  Image,
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Axios from 'axios';

class BookCard extends Component {
  state = {
    bookData: [],
  };
  componentDidMount = () => {
    this.getAllBookData();
  };

  getAllBookData = () => {
    Axios.get('http://192.168.100.185:3001/api/v1/books')
      .then(({data}) => {
        this.setState({bookData: data.data});
      })
      .catch(err => console.log(err));
  };

  renderBookItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => this.props.onPress(item.id)}>
        <View style={[styles.photoContainer]}>
          <Image style={styles.photoImage} source={{uri: item.imageURL}} />
        </View>
        <View style={styles.infoTextContainer}>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
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

    backgroundColor: '#eee',
  },
  photoImage: {
    width: 160,
    height: 200,
    borderRadius: 10,
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
