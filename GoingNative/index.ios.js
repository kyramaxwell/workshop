import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class GoingNative extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

AppRegistry.registerComponent('GoingNative', () => GoingNative);
