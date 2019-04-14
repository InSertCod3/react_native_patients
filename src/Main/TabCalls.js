import React, { Component } from 'react';
import { Dimensions, Text, StyleSheet, View, FlatList, ScrollView } from 'react-native';
import { Card, Avatar } from 'react-native-elements'
import { Feather, Entypo } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window')

export default class TabUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    const users = [
      {
        key: '0',
        name: 'Luis Methews',
        avatar: 'https://images.unsplash.com/photo-1509868918748-a554ad25f858?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3159ec467959b2aada4b75d565c270aa',
        blurb: 'Phasellus quis lectus sit',
        age_text: 'Recent Visit 4 days ago.',
        email: 'luismat@mail.com'
      },
      {
        key: '1',
        name: 'Curtis Mays',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        blurb: 'Phasellus quis lectus sit',
        age_text: 'Recent Visit 14 days ago.',
        email: 'curtis@mail.com'
      },
      {
        key: '2',
        name: 'Steve Allen',
        avatar: 'https://pbs.twimg.com/profile_images/953000038967468033/n4Ngwvi7.jpg',
        blurb: 'Phasellus quis lectus sit',
        age_text: 'Recent Visit 18 days ago.',
        email: 'steve@mail.com'
      },
      {
        key: '3',
        name: 'Norwis Smith',
        avatar: 'https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13-200w.jpeg',
        blurb: 'Phasellus quis lectus sit',
        age_text: 'Recent Visit 23 days ago.',
        email: 'norimth@mail.com'
      },
      {
        key: '4',
        name: 'Jane Jones',
        avatar: 'https://pbs.twimg.com/profile_images/1006266234181210117/oedmUmVc.jpg',
        blurb: 'Phasellus quis lectus sit',
        age_text: 'Recent Visit 7 days ago.',
        email: 'janejone@mail.com'
      },
      {
      key: '5',
      name: 'Nick Williams',
      avatar: 'https://randomuser.me/api/portraits/men/91.jpg',
      blurb: 'Phasellus quis lectus sit',
      age_text: 'Recent Visit 45 days ago.',
      email: 'nick@cmail.com'
      },
      {
        key: '6',
        name: 'Clark Kent',
        avatar: 'https://pbs.twimg.com/profile_images/1068045383606005761/VxDQx_gA.jpg',
        blurb: 'Phasellus quis lectus sit',
        age_text: 'Recent Visit 12 days ago.',
        email: 'clakent@kmail.com'
      }
     ]

    return (
      <View>
        <ScrollView scrollEventThrottle={16}>
        <View style={styles.navBar}>
          <View style={styles.leftContainer}>
            <Feather style={{flex: 0, marginTop: 10, marginLeft: 25}} name="search" size={24} color="black" />
          </View>
          <View style={styles.rightContainer}>
            <Entypo style={{flex: 0, marginTop: 10, marginRight: 25}} name="dots-three-vertical" size={20} color="black" />
          </View>
        </View>
        <FlatList
          data={users}
          ItemSeparatorComponent={() => <View style={{ margin: 1 }} />}
          renderItem={({item}) => (
            <Card
            borderBottomLeftRadius={8}
            borderBottomRightRadius={8}
            borderRadius={10}>
              <View style={{ backgroundColor: '#FFFFFF'}}>
                  <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: width - (width * 0.13), marginTop: 10, paddingRight: 10}}>
                    <Avatar
                      size="large"
                      source={{
                        uri: item.avatar,
                      }}
                      rounded
                      onPress={() => console.log(this.props)}
                      activeOpacity={0.7}
                    />
                    <View style={{alignItems: 'flex-start', justifyContent: 'flex-start', marginLeft: 35}}>
                      <Text style={{ fontSize: 22, fontFamily: "Rubik-Medium", color: '#5B5B5B' }}>{item.name}</Text>
                      <Text style={{ fontSize: 16, fontFamily: "Rubik-Light", color: '#5B5B5B' }}>{item.blurb}</Text>
                      <Text style={{ fontSize: 13, fontFamily: "Rubik-Light", color: '#5B5B5B' }}>{item.age_text}</Text>
                      <View style={{marginTop: 5}}></View>
                      <View style={{flexDirection: 'row'}}>
                        <Feather name="flag" size={16} color="purple" />
                        <Text style={{ marginLeft: 6, fontSize: 16, fontFamily: "Rubik-Light", color: 'black' }}>Brooklyn, NY</Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Feather name="phone" size={16} color="purple" />
                        <Text style={{ marginLeft: 6, fontSize: 16, fontFamily: "Rubik-Light", color: 'black' }}>+1 (347) 672-6723</Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Feather name="mail" size={16} color="purple" />
                        <Text style={{ marginLeft: 6, fontSize: 16, fontFamily: "Rubik-Light", color: 'black' }}>{item.email}</Text>
                      </View>
                    </View>
                </View>
              </View>
            </Card>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  rightIcon: {
    height: 10,
    width: 10,
    resizeMode: 'contain'
  }
});
