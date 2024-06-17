import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Contato() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Contato / Quem somos</Text>
      <View style={styles.contactInfo}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>cinemanamao@gmail.com</Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.label}>Telefone:</Text>
        <Text style={styles.info}>(11) 1234-5678</Text>
      </View>
      <Text style={styles.description}>
        O aplicativo "Cinema na Mão" traz os últimos lançamentos e destaques do cinema, permite buscar
        informações sobre filmes e oferece recomendações personalizadas para os usuários.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  contactInfo: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginRight: 10,
  },
  info: {
    fontSize: 18,
    color: '#555',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
    marginTop: 20,
    lineHeight: 26,
  },
});
