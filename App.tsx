import React from 'react';
import { CryptoDetail, Transaction } from './src/screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './src/Navigation/Tab';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'Home'}>
      <Stack.Screen name='home' component={Tabs}/>
      <Stack.Screen name='cryptoDetail' component={CryptoDetail}/>
      <Stack.Screen name='transaction' component={Transaction}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

