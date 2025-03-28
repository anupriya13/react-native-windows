/**
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 * @format
 */

import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

export default class Bootstrap extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.welcome} writingDirection={'auto'}>Writing Direction: Auto</Text>
        <Text style={styles.welcome} writingDirection={'ltr'}>Writing Direction: Left to Right</Text>
        <Text style={styles.welcome} writingDirection={'rtl'}>Writing Direction: Right to left</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C5CCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('Bootstrap', () => Bootstrap);
