import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { db } from '../firebaseConfig';
import { collection, onSnapshot, query, orderBy, limit } from 'firebase/firestore';
import { colors } from '../styles';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const [assinaturas, setAssinaturas] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const q = query(collection(db, 'assinaturas'), orderBy('dataRenovacao'), limit(5));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAssinaturas(data);
      const soma = data.reduce((acc, item) => acc + item.valor, 0);
      setTotal(soma);
    });
    return () => unsubscribe();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.nome}</Text>
      <Text style={styles.cardText}>R$ {item.valor.toFixed(2)}</Text>
      <Text style={styles.cardText}>Renova em: {new Date(item.dataRenovacao.seconds * 1000).toLocaleDateString()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gasto Mensal Estimado</Text>
      <Text style={styles.total}>R$ {total.toFixed(2)}</Text>

      <Text style={styles.subtitle}>Próximas Assinaturas:</Text>
      <FlatList
        data={assinaturas}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.cardText}>Nenhuma assinatura próxima.</Text>}
      />

      <View style={styles.bottomButtons}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('Adicionar')}
        >
          <Ionicons name="add-circle-outline" size={24} color="#fff" />
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: colors.primary }]}
          onPress={() => navigation.navigate('Assinaturas')}
        >
          <Ionicons name="list-outline" size={24} color="#fff" />
          <Text style={styles.buttonText}>Ver Todas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.secondary, padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', color: colors.text },
  total: { fontSize: 28, fontWeight: 'bold', color: colors.primary, marginBottom: 20 },
  subtitle: { fontSize: 16, fontWeight: '600', color: colors.gray, marginBottom: 10 },
  card: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: colors.text },
  cardText: { fontSize: 14, color: colors.gray },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
  },
  actionButton: {
    backgroundColor: colors.success,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8
  },
  buttonText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: 'bold',
    fontSize: 16
  }
});