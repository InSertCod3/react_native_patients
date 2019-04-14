import * as React from 'react';
import { BottomNavigation, DefaultTheme} from 'react-native-paper';
import { createStackNavigator, createAppContainer } from "react-navigation";
import TabBrowse from 'src/Main/TabBrowse';
import TabCalls from 'src/Main/TabCalls';
import TabMessage from 'src/Main/TabMessage';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#48a2de',
    accent: '#0E0E0E',
  }
};

class IndexComponent extends React.Component {

  static navigationOptions = {
    title: 'Home',
    header: null
  }

  state = {
    index: 1,
    routes: [
      { key: 'tabmessage', title: 'Messages', icon: 'message', color: '#FFFFFF'},
      { key: 'tabappointment', title: 'Appointments', icon: 'polymer', color: '#FFFFFF'},
      { key: 'tabcalls', title: 'Call List', icon: 'call', color: '#FFFFFF'},
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    tabappointment: TabBrowse,
    tabmessage: TabMessage,
    tabcalls: TabCalls,
  });

  render() {
    
    return (
      <BottomNavigation
        shifting={true}
        theme={theme}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: IndexComponent
  }
});

export default createAppContainer(AppNavigator);