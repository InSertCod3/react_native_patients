// @flow
import React, { Component } from 'react';
import Main from 'src/Main';
import { Font } from 'expo';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      _appisReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Rubik-Medium': require('./assets/fonts/Rubik/Rubik-Medium.ttf'),
      'Rubik-Light': require('./assets/fonts/Rubik/Rubik-Light.ttf'),
    });
    this.setState({ _appisReady: true });
  }
  render() {
    if (this.state._appisReady) {
      return <Main />;
    } else {
      return null;
    }
  }
}