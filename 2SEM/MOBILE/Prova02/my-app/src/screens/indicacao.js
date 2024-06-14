import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Indicacao() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Filmes que indico</Text>
      
      <View style={styles.movie}>
        <Image source={require('../assets/getOut.jpg')} style={styles.image} />
        <Text style={styles.movieTitle}>1. Get Out</Text>
      </View>

      <View style={styles.movie}>
        <Image source={require('../assets/Ib.jpg')} style={styles.image} />
        <Text style={styles.movieTitle}>2. Inglorious Basterds</Text>
      </View>

      <View style={styles.movie}>
        <Image source={require('../assets/starwars.jpg')} style={styles.image} />
        <Text style={styles.movieTitle}>3. StarWars (1977)</Text>
      </View>

      <View style={styles.movie}>
        <Image source={require('../assets/django.jpg')} style={styles.image} />
        <Text style={styles.movieTitle}>4. Django Unchained</Text>
      </View>
      
      <View style={styles.movie}>
        <Image source={require('../assets/us.jpg')} style={styles.image} />
        <Text style={styles.movieTitle}>5. Us</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    height: 'fit-content',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  movie: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 450,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
});
