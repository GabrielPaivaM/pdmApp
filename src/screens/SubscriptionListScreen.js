import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert } from 'react-native';
import { db } from '../firebaseConfig';
import { collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';

export default function SubscriptionListScreen() {
  const [assinaturas, setAssinaturas] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'assinaturas'), snapshot => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAssinaturas(data);
    });
    return () => unsubscribe();
  }, []);

  const excluir = async (id) => {
    await deleteDoc(doc(db, 'assinaturas', id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={assinaturas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nome} - R$ {item.valor}</Text>
            <Text>Renova em: {new Date(item.dataRenovacao.seconds * 1000).toLocaleDateString()}</Text>
            <Button title="Excluir" onPress={() => excluir(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { marginBottom: 10, borderBottomWidth: 1, paddingBottom: 10 }
});