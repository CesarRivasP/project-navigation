import React from 'react';
import { 
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator
 } from 'react-navigation'

import { StatusBar } from "react-native";
import PageA from './screens/pageA'
import PageB from './screens/pageB'
import PageC from './screens/pageC'
import Page1 from './screens/page1'
import Page2 from './screens/page2'
import Page3 from './screens/page3'
import Page4 from './screens/page4'
import Icon from 'react-native-vector-icons/FontAwesome'


const headerIcon = (navigation, icon) => <Icon
  name={icon}
  style={{marginLeft: 20}}
  size={20}
  color="black"
  onPress={() => navigation.openDrawer()}
/>

const navigationOptions = {
  navigationOptions: {
    headerStyle: {
      backgroundColor:"white",
    },
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center',
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold'
    }
  }
}

const Page1ScreenStack = createStackNavigator(
  {
    Page1Screen: {
      screen: Page1,
      navigationOptions: ({navigation}) => ({
        title: 'Pagina 1',
        headerLeft: headerIcon(navigation, 'bars')
      })
    }
  },
  navigationOptions
) 

const Page2ScreenStack = createStackNavigator(
  {
    Page1Screen: {
      screen: Page2,
      navigationOptions: ({navigation}) => ({
        title: 'Pagina 2',
        headerLeft: headerIcon(navigation, 'bars')
      })
    }
  },
  navigationOptions
) 
const Page3ScreenStack = createStackNavigator(
  {
    Page1Screen: {
      screen: Page3,
      navigationOptions: ({navigation}) => ({
        title: 'Pagina 3',
        headerLeft: headerIcon(navigation, 'bars')
      })
    }
  },
  navigationOptions
) 
const Page4ScreenStack = createStackNavigator(
  {
    Page1Screen: {
      screen: Page4,
      navigationOptions: ({navigation}) => ({
        title: 'Pagina 4',
        headerLeft: headerIcon(navigation, 'bars')
      })
    }
  },
  navigationOptions
) 

export default createDrawerNavigator(
  {
    Page1: {
      screen: Page1ScreenStack,
      navigationOptions:({ navigation }) => ({
        drawerLabel: "Pagina 1",
        drawerIcon: ({tintColor}) => (<Icon name="sign-in" size={30} style={{color:tintColor}} />),
      })
    },
    Page2: {
      screen: Page2ScreenStack,
      navigationOptions:({ navigation }) => ({
        drawerLabel: "Pagina 2",
        drawerIcon: ({tintColor}) => (<Icon name="sign-in" size={30} style={{color:tintColor}} />),
      })
    },
    Page3: {
      screen: Page3ScreenStack,
      navigationOptions:({ navigation }) => ({
        drawerLabel: "Pagina 3",
        drawerIcon: ({tintColor}) => (<Icon name="sign-in" size={30} style={{color:tintColor}} />),
      })
    },
    Page4: {
      screen: Page4ScreenStack,
      navigationOptions:({ navigation }) => ({
        drawerLabel: "Pagina 4",
        drawerIcon: ({tintColor}) => (<Icon name="sign-in" size={30} style={{color:tintColor}} />),
      })
    }
  }
)
