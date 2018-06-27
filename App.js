import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, Dimensions } from 'react-native';

export default class App extends React.Component {
  render() {
    const img = require('./src/assets/logo.png');
    console.log(img);
    return (
      <SafeAreaView style={styles.container}>
        <Image resizeMode="contain" style={{ width: Dimensions.get('window').width }} source={ require('./src/assets/logo.png') } />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
