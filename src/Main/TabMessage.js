import React, { Component } from 'react';
import { Dimensions, Text, StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window')

export default class TabUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20}}>
          <Entypo style={{flex: 0, marginTop: 10, marginRight: 20}} name="dots-three-vertical" size={20} color="black" />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: height - (height * 0.70)}}>
          <Text style={styles.nameText}>Messages</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nameText: {
    textAlign: 'center', 
    fontSize: 28, 
    fontWeight: '400', 
    marginLeft: 0, 
    textDecorationColor: "#222222"
  },
});
