import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#7159C1'></StatusBar>

      <View style={styles.container}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.heart}>S2</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159C1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold'
  },
})