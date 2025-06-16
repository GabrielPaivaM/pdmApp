import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AddSubscriptionScreen from './src/screens/AddSubscriptionScreen';
import SubscriptionListScreen from './src/screens/SubscriptionListScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Adicionar" component={AddSubscriptionScreen} />
        <Stack.Screen name="Assinaturas" component={SubscriptionListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}