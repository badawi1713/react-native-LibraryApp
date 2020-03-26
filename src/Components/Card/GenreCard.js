import React, {Component} from 'react';
import {
  SafeAreaView,
  Image,
  View,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';
const URL_STRING = 'http://192.168.100.185:3001/api/v1/genres';
import Axios from 'axios';

class GenreCard extends Component {
  state = {
    genreData: [],
  };
  componentDidMount = () => {
    this.getGenre();
  };

  getGenre = () => {
    Axios.get(URL_STRING)
      .then(({data}) => {
        this.setState({genreData: data.result});
      })
      .catch(err => console.log(err));
  };

  renderGenreItem = ({item, index}) => {
    console.log('genre', this.state.genreData[0].genreImage);

    return (
      // <View style={(styles.item, {backgroundColor: {color}})}>
      <View style={[styles.item, {backgroundColor: item.color}]}>
        <Text style={styles.title}>{item.name}</Text>
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: 130, height: 80, backgroundColor: 'grey'}}
          source={{
            uri:
              'https://cdn.clipart.email/215a089f47fede68ce55f7fceeebe8ff_download-wizard-free-png-photo-images-and-clipart-freepngimg_1855-2177.png',
          }}
        />
      </View>
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={this.state.genreData}
          renderItem={this.renderGenreItem}
          keyExtractor={item => String(item.id)}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 10,
    marginLeft: 30,
    // backgroundColor: 'grey',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    borderRadius: 20,
    width: 300,
    height: 150,
    marginRight: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    // backgroundColor: 'yellow',
    fontSize: 20,
    color: '#fff',
  },
  genreImage: {
    width: 66,
    height: 58,
  },
});

export default GenreCard;
