import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Switch} from 'react-native';

const icon = require('../assets/icon.png');
const igor02 = require("../assets/face02.gif");
const igor01 = require("../assets/face01.png");
export default function App() {
  const [habilitado, setHabilitado] = new useState(false);

  const habilitar = () => {
    setHabilitado(!habilitado)
  };

  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} /><br></br>
      <Switch value={habilitado} onValueChange={habilitar}/><br></br>
      <Image source={habilitado ? igor02 : igor01} style={styles.igor} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100vh',
    width:'100vw',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor : '#eea4bb',
    backgroundSize : 'cover',
    backgroundRepeat : 'no repeat',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px'
  },
  icon:{
    width: '22vw',
    height: '15vh',
  },
  igor:{
    width:'460px',
    height:'450px'
  }
});
