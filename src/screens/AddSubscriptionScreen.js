import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export default function AddSubscriptionScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');
  const [categoria, setCategoria] = useState('');

  const adicionar = async () => {
    await addDoc(collection(db, 'assinaturas'), {
      nome,
      valor: parseFloat(valor),
      dataRenovacao: new Date(data),
      categoria
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput value={nome} onChangeText={setNome} style={styles.input} />
      <Text>Valor (R$):</Text>
      <TextInput value={valor} onChangeText={setValor} keyboardType="numeric" style={styles.input} />
      <Text>Data Renovação (AAAA-MM-DD):</Text>
      <TextInput value={data} onChangeText={setData} style={styles.input} />
      <Text>Categoria:</Text>
      <TextInput value={categoria} onChangeText={setCategoria} style={styles.input} />
      <Button title="Salvar" onPress={adicionar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 8, borderRadius: 5 }
});