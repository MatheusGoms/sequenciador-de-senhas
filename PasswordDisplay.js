import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PasswordDisplay = ({ password }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Senha do Batman:</Text>
      <Text style={styles.password}>{password}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: '#FFD700', // Cor dourada
    borderRadius: 10,
    backgroundColor: '#000', // Fundo preto
  },
  title: {
    color: '#FFD700',
    fontSize: 18,
    marginBottom: 10,
  },
  password: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PasswordDisplay;
