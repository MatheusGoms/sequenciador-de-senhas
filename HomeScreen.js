import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PasswordDisplay from '../components/PasswordDisplay';
import Button from '../components/Button';
import { generatePassword } from '../utils/passwordGenerator';

const HomeScreen = () => {
  const [password, setPassword] = useState('');

  const handleGeneratePassword = () => {
    const newPassword = generatePassword();
    setPassword(newPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sequenciador de Senhas do Batman</Text>
      <PasswordDisplay password={password} />
      <Button title="Gerar Senha" onPress={handleGeneratePassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Fundo preto
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
