import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Switch} from 'react-native';

const icon = require('./assets/icon.png');
export default function App() {
  const [habilitado, setHabilitado] = new useState(false);

  const habilitar = () => {
    setHabilitado(!habilitado)
  };

  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} /><br></br>
      <Switch value={habilitado} onValueChange={habilitar}/><br></br>
      <Image source={{uri:(habilitado) ? "./assets/mj02.gif" : "./assets/mj01.webp"}} style={styles.mj}/>
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
    backgroundImage : 'url("./assets/background.jpg")',
    backgroundSize : 'cover',
    backgroundRepeat : 'no repeat',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px'
  },
  icon:{
    width: '520px',
    height: '200px',
  },
  mj:{
    width:'300px',
    height:'500px'
  }
});
