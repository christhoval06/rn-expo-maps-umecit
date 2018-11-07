import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.bold]}>Hola Mundo!!</Text>
        <Text style={styles.text}>Expo</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
  bold:{
    fontWeight: '900',
    fontSize: 30,
  }
});
