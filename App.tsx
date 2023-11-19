import React from 'react';
import {Market, Profile } from './src/screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabs from './src/navigation/BottomTabs';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './src/stores/rootReducer';

const Stack = createStackNavigator();



const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
});

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='home'>
        <Stack.Screen name='home' component={BottomTabs} />
        <Stack.Screen name='market' component={Market} />
        <Stack.Screen name='profile' component={Profile}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>



  );
};