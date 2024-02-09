import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hellooo!!</Text>
      <Image
        style={styles.logo}
        source={{
          uri : 'https://i.gifer.com/Kllj.gif'
  }}
      />
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
    
  },
  logo: {
    width:498,
    height:373
  }
});
