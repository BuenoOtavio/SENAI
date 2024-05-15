import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const picture = require('../assets/picture.jpg');

const Home = () => {
  return (
    <View style={styles.container}>
       <Image source={picture} style={styles.picture} /><br></br>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100vh',
    width:'100vw',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor : '#000000',
    backgroundSize : 'cover',
    backgroundRepeat : 'no repeat',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px'
  },
  picture:{
    width: '62vw',
    height: '15vh',
  }
});

export default Home;