import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Contato() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato / Quem somos</Text>
      <Text>Email: cinemanamao@gmail.com</Text>
      <Text>Telefone: (11) 1234-5678</Text>
      <Text>
        O aplicativo "Cinema na Mão" traz os últimos lançamentos e destaques do cinema, permite buscar
        informações sobre filmes e oferece recomendações personalizadas para os usuários.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
