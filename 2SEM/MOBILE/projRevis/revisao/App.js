import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Switch} from 'react-native';

const bomdia = 'bom diaaa';
const boanoite = 'boa noiteeee';

const icon = require('./assets/icon.png');
export default function App() {
  const [habilitado, setHabilitado] = new useState(false);

  const habilitar = () => {
    setHabilitado(!habilitado)
  };

  return (
    <View style={styles.container}>
      <Switch value={habilitado} onValueChange={habilitar}/><br></br>
      <Image source={{uri:(habilitado) ? "./assets/moon.png" : "./assets/sun.png"}} style={styles.time}/><br></br>
      <Image source={{uri:(habilitado) ? "./assets/boanoite.png" : "./assets/bomdia.png"}} style={styles.time}/><br></br>
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
    backgroundImage : 'url("./assets/background.gif")',
    backgroundSize : 'cover',
    backgroundRepeat : 'no repeat',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px'
  },
  time:{
    width:'10vw',
    height:'20vh'
  },
  textin:{
    color: 'white'
  }
}
);
