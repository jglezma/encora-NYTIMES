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
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const {width} = Dimensions.get('screen');
function listMovies() {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();

  const getMovies = async () => {
    try {
      const response = await fetch(
        'https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=MZjJrb1Z4rAZcQ1TqabEPd6xeJDgsTgY'
      );
      const json = await response.json();
      console.log('movie',json);
      setMovies(json.results);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getMovies();
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
        <View style={styles.head}>
          <Text style={styles.highlight}>Movies</Text>
        </View>
        {movies.map((movie) => (
        <TouchableOpacity style={styles.movies}
        onPress={() => navigation.navigate('Detail', {movie})}>
          <Image source={{uri: movie.multimedia.src}} style={styles.image} />
          <View style={styles.letterSpace}>
            <Text style={styles.title}>{movie?.display_title}</Text>
            <Text>Review: {movie?.headline}</Text>
            <Text>{movie?.byline}</Text>
            <Text>Release date: {movie?.publication_date}</Text>
          </View>
        </TouchableOpacity>
        ))}
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
  head: {
    borderBottomWidth: .5,
    paddingBottom: 10
  },
  movies: {
    borderBottomWidth: .5,
    paddingVertical: 5,
    flexDirection: 'row'
  },
  image: {
    height: 100,
    width: 100,
  },
  letterSpace: {
    width: width / 1.4,
    paddingLeft: 10
  }
});

export default listMovies;