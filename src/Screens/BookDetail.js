import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import DetailHeader from '../Components/Header/DetailHeader';
import BookCoverHeader from '../Components/Header/BookCoverHeader';
import Axios from 'axios';

// const bookID = this.props.get.params.id;
// console.log('my id', bookID);
const URL_STRING = 'http://192.168.100.185:3001/api/v1/books/';
const BookDetail = props => {
  const route = useRoute();
  const bookId = route.params.id;

  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const renderData = async () => {
      await getBookData();
      console.log('my book', bookData);
    };

    renderData();
    // getBookData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBookData = () => {
    Axios.get(URL_STRING + bookId)
      .then(({data}) => {
        setBookData(data.result[0]);
        console.log('data', data.result[0]);
      })
      .catch(err => console.log(err));
  };

  const backButtonHandler = () => {
    props.navigation.navigate('Home');
  };

  // const renderBookDescription = () => {
  //   return (
  //     <View style={styles.descriptionContainer}>
  //       <Text style={styles.descriptionText}>{bookData.description}</Text>
  //     </View>
  //   );
  // };

  return (
    <View style={styles.container}>
      <DetailHeader data={bookData} backButton={backButtonHandler} />
      <BookCoverHeader data={bookData} />
      <ScrollView
        style={styles.descriptionContainer}
        vertical={true}
        automaticallyAdjustContentInsets={true}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.descriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          lobortis, ipsum eget malesuada condimentum, risus turpis eleifend
          velit, in vestibulum ex dui id lorem. Aenean malesuada consectetur
          metus, vitae vestibulum lacus finibus et. Praesent iaculis, erat sit
          amet bibendum posuere, magna erat ullamcorper nibh, id euismod sapien
          diam nec purus. Praesent sed facilisis nulla. Donec id metus at eros
          pulvinar dictum. Morbi porta quam quis erat scelerisque varius. Fusce
          pulvinar rhoncus tristique. Ut lacinia feugiat lorem nec consectetur.
          Integer ac erat elementum, efficitur orci ut, malesuada libero.
          Vestibulum viverra ornare est, non sollicitudin augue sagittis eu. Sed
          ullamcorper, risus hendrerit semper condimentum, odio dolor congue
          arcu, feugiat accumsan libero tellus vel enim. Ut lectus arcu,
          sagittis vel aliquam sit amet, rutrum id libero. Proin blandit
          molestie porta. Nam cursus, neque vitae dapibus rutrum, quam metus
          porta elit, sed finibus lacus massa rhoncus augue. Suspendisse
          potenti. Morbi quam nunc, egestas et purus eget, imperdiet pulvinar
          ex. Sed faucibus risus vehicula ullamcorper varius. Proin est eros,
          commodo vitae nisl ut, vestibulum finibus orci. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Vivamus bibendum orci mauris. Pellentesque odio mauris, pharetra
          cursus blandit eu, feugiat vel ex. Mauris auctor sapien id feugiat
          euismod. In feugiat consequat leo dictum viverra. Maecenas malesuada
          justo vel consectetur cursus. Proin non orci at neque iaculis
          tincidunt. Praesent laoreet nisi risus, suscipit mattis ex ultricies
          sed. Sed sodales, dui vitae porttitor scelerisque, enim est gravida
          mi, vitae malesuada nisl eros non sapien. Quisque sagittis tortor at
          mi condimentum rhoncus. Duis convallis purus in purus eleifend
          fermentum.
        </Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Text style={styles.rentBook}>RENT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: 0,
  },
  descriptionContainer: {
    // backgroundColor: 'yellow',
    marginTop: 160,
    // marginBottom: 100,
    paddingHorizontal: 30,
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: '600',
  },
  buttonContainer: {
    paddingVertical: 10,
  },
  rentBook: {
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 55,
    alignSelf: 'center',
    borderRadius: 25,
    backgroundColor: '#F4CF5D',
  },
});
