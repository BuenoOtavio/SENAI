import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri : 'https://avatars.githubusercontent.com/u/140626677?s=400&u=417059d50f9b5551957a00228751536acc5d5e34&v=4'
  }}
      />
            
      <h1>Otavio Lima Bueno</h1><br></br>
      <h1>-Dados-</h1><br></br>
      <p>Nascimento: 19/12/2006</p>
      <p>Telefone: 19 99863-9005</p>
      <p>Endereco: Jaguariúna, Sp</p><br></br>
      <h1>-Formação-</h1><br></br>
      <p >Ensino Médio: Julia Calhau</p>
      <p>Ensino Técnico: Senai</p>
      <p>Inglês: Intermediário</p><br></br>

    <TouchableOpacity onPress={() => Linking.openURL('https://github.com/BuenoOtavio')}>
      <Image
        style={styles.icon}
        source={{
          uri : 'https://static-00.iconduck.com/assets.00/github-desktop-icon-2046x2048-r5plljad.png'
  }}
      />
      </TouchableOpacity>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'scroll',
    fontFamily: 'Arial',
    color: '#603fef'
  },
  image: {
    marginTop:200,
    width:200,
    height:200
  },
  icon:{
    width:200,
    height:200
  }
});
