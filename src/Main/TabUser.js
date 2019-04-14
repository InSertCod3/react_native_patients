import React, { Component } from 'react';
import { Dimensions, Text, StyleSheet, View } from 'react-native';
import { Avatar  } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window')

export default class TabUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPortrait: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
    };
  }

  render() {
    return (
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20}}>
          <Entypo style={{flex: 0, marginTop: 10, marginRight: 20}} name="dots-three-vertical" size={20} color="black" />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: height - (height * 0.80)}}>
          <Avatar
            rounded
            size={'xlarge'}
            marginTop={-5}
            source={{ uri: this.state.userPortrait}}/>
        </View>
        <View style={{flexDirection: 'column', justifyContent: 'flex-end', marginTop: 20}}> 
          <Text style={styles.nameText}>Jane Doe</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nameText: {
    textAlign: 'center', 
    fontSize: 28, 
    fontWeight: '500', 
    marginLeft: 0, 
    textDecorationLine: 'underline', 
    textDecorationColor: "#5B5B5B"
  },
});
