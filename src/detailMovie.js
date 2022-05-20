import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Linking,
  TouchableOpacity,
} from 'react-native';
const {width, height} = Dimensions.get('screen');

function detailMovie(movie) {
  const [movies, setMovies] = useState([]);
 useEffect(() => {
   console.log('detail, ', movie.route.params.movie);
   setMovies(movie.route.params.movie);
 }, [])
 

  return (
    <SafeAreaView 
    style={{
      backgroundColor: '#FFF'
    }}>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <Image source={{uri: movies?.multimedia?.src}} style={styles.image} />
        <View style={styles.head}>
          <Text style={styles.title}>{movies?.display_title}</Text>
        </View>
        <View style={styles.head}>
          <Text>Review: {movies?.headline}</Text>
        </View>
        <View style={styles.head}>
          <Text>by: {movies?.byline}</Text>
        </View>
        <View style={styles.head}>
          <Text>by: {movies?.summary_short}</Text>
        </View>
        <TouchableOpacity style={styles.head}
        onPress={() =>
          Linking.openURL(
            movies?.link?.url,
          )
        }>
          <Text style={styles.link}>{movies?.link?.suggested_link_text}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
  },
  link: {
    color: 'blue',
  },
  head: {
    borderBottomWidth: .5,
    padding: 10
  },
  movies: {
    borderBottomWidth: .5,
    paddingVertical: 5,
    flexDirection: 'row'
  },
  image: {
    height: 100,
    width: width,
    height: height / 4
  },
  letterSpace: {
    width: width / 1.4,
    paddingLeft: 10
  }
});

export default detailMovie;