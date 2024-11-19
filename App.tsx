
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import RootNavigation from './src/navigation/rootNavigation';
import Detail from './src/screens/detailScreen';
import Home from './src/screens/homeScreen';
import AddTransaction from './src/screens/addTransaction';

function App() {
  return (
    <RootNavigation />
  );
}

export default App;

const style = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  }
})