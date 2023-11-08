import React from 'react';
import {Market, Profile } from './src/screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabs from './src/Navigation/BottomTabs';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'Home'}>
      <Stack.Screen name='home' component={BottomTabs}/>
      <Stack.Screen name='market' component={Market}/>
      <Stack.Screen name='profile' component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

