import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Destaques() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Destaques</Text>
      <Image source={require('../assets/getOut.jpg')} style={styles.image} />
      <Image source={require('../assets/Ib.jpg')} style={styles.image} />
      <Image source={require('../assets/starwars.jpg')} style={styles.image} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    height: 300,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 10,
  },
});
