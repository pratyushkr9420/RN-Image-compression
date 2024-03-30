import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';

const App : FC = () : JSX.Element | null=> {
  return  (
    <HomeScreen/>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});