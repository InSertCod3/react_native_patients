import React, { Component } from 'react';
import { SearchBar, Avatar } from 'react-native-elements';
import { MaterialCommunityIcons, MaterialIcons, Feather } from '@expo/vector-icons';
import { TouchableOpacity,
         SafeAreaView,
         Dimensions,
         ScrollView, 
         StyleSheet, 
         View, 
         Text, 
         FlatList, 
         StatusBar, } from 'react-native';
import Swipeout from 'react-native-swipeout';

const { height, width } = Dimensions.get('window');


export default class Example extends Component {
  
  state = {
    search: '',
  };

  updateSearch = search => {
    /* Seach bar Functionality */
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    var swipeoutBtns = [
      {
        backgroundColor: 'transparent',
        component: <View style={styles.centerItem}><MaterialCommunityIcons name="message-bulleted" size={38} color="#b3b1b1" /></View>
      },
      {
        backgroundColor: 'transparent',
        component: <View style={styles.centerItem}><MaterialIcons name="call" size={38} color="#3a5fcd" /></View>
      }
    ]

    return (
      <SafeAreaView style={{ backgroundColor: '#FFFFFF', flex: 1, marginBottom: 3}}>
        <StatusBar backgroundColor="#595764" barStyle="light-content" />
          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, backgroundColor: '#FFFFFF', marginBottom: 5 }}>
                <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
                  <View style={{ flex: 1, backgroundColor: '#FFFFFF', marginBottom: 10 }}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width - (width * 0.13), marginTop: 10, paddingRight: 10}}>
                      <SearchBar
                          placeholder="Search Here..."
                          platform='ios'
                          placeholderTextColor={'rgba(149,156,160,0.8)'}
                          borderRadius={40}
                          onChangeText={() => {}}
                          onClear={() => {}}
                          onCancel={() => {}}
                          cancelButtonTitle={''}
                          inputContainerStyle={{
                            backgroundColor:  'rgba(217,217,217,0.5)',
                        }}
                          leftIconContainerStyle={{
                              marginLeft: 15,
                              marginRight: 5,
                          }}
                          inputStyle={{
                              fontSize: 16,
                              marginLeft: 5,
                              backgroundColor: 'transparent',
                              color: 'rgba(29,31,32,1)'
                          }}
                          containerStyle={{
                              marginLeft: 5,
                              paddingRight: 0,
                              backgroundColor: 'transparent',
                              borderTopWidth: 0,
                              borderBottomWidth: 0
                          }}
                          onChangeText={this.updateSearch}
                          value={search}
                      />
                      <Avatar
                        size="medium"
                        source={{
                          uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                        rounded
                        onPress={() => console.log(this.props)}
                        activeOpacity={0.7}
                      />
                    </View>
                  </View>
                <View style={styles.navBar}>
                  <View style={styles.leftContainer}>
                    <View style={{marginLeft: 30}}>
                      <Feather name="chevron-left" size={28} color="#aaaaaa" />
                    </View>
                  </View>
                  <Text style={styles.text}>
                    <Text style={{ fontSize: 16, fontFamily: "Rubik-Light", marginLeft: 20, color: '#5B5B5B' }}>Friday 28, 2019 (Today)</Text>
                  </Text>
                  <View style={styles.rightContainer}>
                  <View style={{marginRight: 30}}>
                      <Feather name="chevron-right" size={28} color="#aaaaaa" />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <FlatList
                itemDimension={240}
                data={[{key: '0', 'name': 'Jessica J.', 'color': '#7ade89', 'details': 'enean bibendum, risus non sollicitudin porta, magna ligula faucibus odio.....', 'time': '9:00 AM', 'room': 'RM01'},
                      {key: '1', 'name': 'John Y.', 'color': '#fe4d4d', 'details': 'Etiam felis massa, imperdiet eget sollicitudin in, eleifend sit amet.....', 'time': '10:00 AM', 'room': 'RM04'},
                      {key: '2', 'name': 'Luis M.', 'color': '#7ade89', 'details': 'Maecenas porttitor justo eu purus varius, nec pharetra nisl vel sagittis.....', 'time': '10:40 AM', 'room': 'RM03'},
                      {key: '3', 'name': 'Barry A.', 'color': '#18b4f0', 'details': 'Cras efficitur convallis ex. Cras imperdiet eget sollicitudin odio arcu aliquam.....', 'time': '11:30 AM', 'room': 'RM01'},
                      {key: '4', 'name': 'Clark K.', 'color': '#18b4f0', 'details': 'Cras vel interdum purus. Vivamus pellentesque odio eget elit tristique fermentum.....', 'time': '1:00 PM', 'room': 'RM04'},
                      {key: '5', 'name': 'Mark M.', 'color': '#7ade89', 'details': 'Nullam vehicula nisl vel turpis condimentum, in gravida urna congue......', 'time': '1:30 PM', 'room': 'RM03'},
                      {key: '6', 'name': 'Jarvis W.', 'color': '#7ade89', 'details': 'Suspendisse potenti. Curabitur justo eu purus varius efficitur est nibh, id sem varius.....', 'time': '2:20 PM', 'room': 'RM01'},
                      {key: '7', 'name': 'Luke S. W.', 'color': '#fe4d4d', 'details': 'Etiam felis massa, imperdiet eget sollicitudin in, eleifend sit amet.....', 'time': '10:00 AM', 'room': 'RM04'},
                      {key: '8', 'name': 'Captain M.', 'color': '#7ade89', 'details': 'Maecenas porttitor justo eu purus varius, nec pharetra nisl vel sagittis.....', 'time': '10:40 AM', 'room': 'RM03'},
                      {key: '9', 'name': 'Moe U.', 'color': '#18b4f0', 'details': 'Cras efficitur convallis ex. Cras imperdiet eget sollicitudin odio arcu aliquam.....', 'time': '11:30 AM', 'room': 'RM01'},
                      {key: '10', 'name': 'Kattie H.', 'color': '#18b4f0', 'details': 'Cras vel interdum purus. Vivamus pellentesque odio eget elit tristique fermentum.....', 'time': '1:00 PM', 'room': 'RM04'},
                      {key: '11', 'name': 'Tony S.', 'color': '#7ade89', 'details': 'Nullam vehicula nisl vel turpis condimentum, in gravida urna congue......', 'time': '1:30 PM', 'room': 'RM03'},
                      {key: '12', 'name': 'Steve W.', 'color': '#7ade89', 'details': 'Suspendisse potenti. Curabitur justo eu purus varius efficitur est nibh, id sem varius.....', 'time': '2:20 PM', 'room': 'RM01'}]}
                style={{marginTop: 10}}
                ItemSeparatorComponent={() => <View style={{ margin: 1 }} />}
                renderItem={({ item, index }) => (
                  <Swipeout right={swipeoutBtns} style={{backgroundColor: 'transparent'}}>
                    <View style={{paddingBottom: 15, flexDirection: 'column'}}>
                      <TouchableOpacity activeOpacity = { .3 } onPress={ (item) => console.log(item) }>
                        <View style={{flexDirection: 'row', flex: 1, height: height - (height * 0.90)}}>
                          <View style={{ backgroundColor: item.color, height: 100, width: 5 }}/>
                            <View style={{flexDirection: 'column'}}>
                              <Text style={{ fontSize: 26, fontFamily: "Rubik-Medium", marginLeft: 20, color: '#5B5B5B' }}>{item.name}</Text>
                              <Text style={{ fontSize: 16, fontFamily: "Rubik-Light", marginLeft: 20, color: '#5B5B5B' }}>{item.details}</Text>
                              <Text style={{ marginTop: 5, fontSize: 14, fontFamily: "Rubik-Light", marginLeft: 20, color: '#A4A4A4' }}>{item.time} | {item.room}</Text>
                            </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </Swipeout>
                )}
              />
            </View>
          </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  centerItem: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navBar: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent'
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }
});