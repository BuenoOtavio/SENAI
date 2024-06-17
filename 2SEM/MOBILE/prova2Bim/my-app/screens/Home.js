import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Cinema na Mão!</Text>
      <Text style={styles.paragraph}>
        O aplicativo "Cinema na Mão" é sua nova plataforma para explorar o mundo do cinema. Aqui, você pode:
      </Text>
      <Text style={styles.paragraph}>
        - Descobrir os filmes em destaque e os lançamentos mais recentes.
      </Text>
      <Text style={styles.paragraph}>
        - Buscar informações detalhadas sobre seus filmes favoritos, utilizando nossa integração com a API OMDb.
      </Text>
      <Text style={styles.paragraph}>
        - Receber recomendações personalizadas com os melhores filmes indicados por nós.
      </Text>
      <Text style={styles.paragraph}>
        - Entrar em contato conosco e saber mais sobre nossa equipe e as novidades que trazemos para você.
      </Text>
      <Text style={styles.paragraph}>
        Aproveite a navegação e explore tudo o que o "Cinema na Mão" tem a oferecer. Bom filme!
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
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 24,
  },
});
