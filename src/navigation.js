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
import Logo from './components/logo'


const headerIcon = (navigation, icon) => <Icon
  name={icon}
  style={{marginLeft: 20}}
  size={23}
  color="grey"
  onPress={() => navigation.openDrawer()}
/>

const headerLogo = (navigation, logo) => <Logo
  name={logo}
  size={20}
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
      color: 'grey',
      fontWeight: 'bold'
    }
  }
} 

const PageAScreenStack = createStackNavigator(
  {
    Main: {
      screen: PageA,
      navigationOptions: ({navigation}) => ({
        title: 'Pagina A',
        headerLeft: headerIcon(navigation, 'bars'),  
        headerRight: headerLogo(navigation, 'bars')
      })
    }
  },
  navigationOptions
) 

const PageBScreenStack = createStackNavigator(
  {
    Page: {
      screen: PageB,
      navigationOptions: ({navigation}) => ({
        title: 'Pagina B',
        headerLeft: headerIcon(navigation, 'bars'),       
        headerRight: headerLogo(navigation, 'bars')
      })
    }
  },
  navigationOptions
) 

const PageCScreenStack = createStackNavigator(
  {
    Page: {
      screen: PageC,
      navigationOptions: ({navigation}) => ({
        title: 'Pagina C',
        headerLeft: headerIcon(navigation, 'bars'),       
        headerRight: headerLogo(navigation, 'bars')
      })
    }
  },
  navigationOptions
) 

const Page1ScreenStack = createStackNavigator(
  {
    Main: {
      screen: Page1,
      navigationOptions: ({navigation}) => ({
        title: 'Pagina 1',
        headerLeft: headerIcon(navigation, 'bars'),       
        headerRight: headerLogo(navigation, 'bars')
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
        headerLeft: headerIcon(navigation, 'bars'),       
        headerRight: headerLogo(navigation, 'bars')
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
        headerLeft: headerIcon(navigation, 'bars'),       
        headerRight: headerLogo(navigation, 'bars')
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
        headerLeft: headerIcon(navigation, 'bars'),       
        headerRight: headerLogo(navigation, 'bars')
      })
    }
  },
  navigationOptions
) 

const TabNavigator = createBottomTabNavigator(
{
    PageA: {
      screen: PageAScreenStack,
      navigationOptions: {
        tabBarLabel : "A",
       //tabBarIcon: <Icon icon=":D" /> //Icon es un componente
       tabBarPosition: "bottom",

      }
    },
    PageB: {
      screen: PageBScreenStack,
      navigationOptions: {
        title : "B",
       //tabBarIcon: <Icon icon=":D" />
       tabBarPosition: "bottom"
      }
    },
    PageC: {
      screen: PageCScreenStack,
      navigationOptions: {
        title : "C",
       //tabBarIcon: <Icon icon=":D" />
       tabBarPosition: "bottom"
      }
    }
  },
  {
    //initialRouteName: 'PageA',
    //order: ['PageA','PageB', 'PageC'],
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: 'grey',
      pressOpacity: 0.8,
      labelStyle: {
      fontSize: 18
      },
      activeBackgroundColor: "#0263c1",
      tabStyle: {
        width: 20,
      }
    }
  }
)

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigator,
      navigationOptions:({ navigation }) => ({
        drawerIcon: ({tintColor}) => (<Icon 
          name="home" 
          size={30} 
          style={{color:tintColor}} />),
      })
    },
    Page1: {
      screen: Page1ScreenStack,
      navigationOptions:({ navigation }) => ({
        drawerLabel: "Pagina 1",
        drawerIcon: ({tintColor}) => (<Icon 
          name="chevron-right" 
          size={20} 
          style={{color:tintColor}} />),
      })
    },
    Page2: {
      screen: Page2ScreenStack,
      navigationOptions:({ navigation }) => ({
        drawerLabel: "Pagina 2",
        drawerIcon: ({tintColor}) => (<Icon 
          name="chevron-right" 
          size={20} 
          style={{color:tintColor}} />),
      })
    },
    Page3: {
      screen: Page3ScreenStack,
      navigationOptions:({ navigation }) => ({
        drawerLabel: "Pagina 3",
        drawerIcon: ({tintColor}) => (<Icon 
          name="chevron-right" 
          size={20} 
          style={{color:tintColor}} />),
      })
    },
    Page4: {
      screen: Page4ScreenStack,
      navigationOptions:({ navigation }) => ({
        drawerLabel: "Pagina 4",
        drawerIcon: ({tintColor}) => (<Icon 
          name="chevron-right" 
          size={20} 
          style={{color:tintColor}} />),
      })
    }
  }
)

export default DrawerNavigator;