import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Users from './Users/User';
import LogoutComponent from './Authentification/LogoutComponent'
import React, { Component } from 'react'; 
import {  Icon } from 'native-base';
import I18n from './Utils/i18n';
import { createStackNavigator } from 'react-navigation-stack';
import { Dimensions, Image, TouchableOpacity, View, Text } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);



class DrawerHeader extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };

  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: screenWidth }}>

        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
        <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20,}}/>
        </TouchableOpacity>
      </View>
    );

  }
}


const UserStack = createStackNavigator({
  First: {
    screen: Users,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <DrawerHeader navigationProps={navigation} />,
      headerTintColor: '#fff',
    }),
  },
});

  

  const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: UserStack,
      navigationOptions: {
        drawerLabel: I18n.t("home"),
        drawerIcon: () => (
          <Icon type="FontAwesome" name="home" />
        ),
      }
    },


    Logout: {
        screen: LogoutComponent,
        navigationOptions: {
          drawerLabel: I18n.t("logout"),
          drawerIcon: () => (
            <Icon type="SimpleLineIcons" name="logout" />
           
          ),
        }
      }
},

// DrawerNavigatorConfig 
{
    drawerWidth: 300,
    drawerPosition: I18n.locale.substring(0, 2) == "ar" ? "right" : 'left',
    contentOptions: {
      activeTintColor: '#000',
    },});
  
//   const MyApp = createAppContainer(MyDrawerNavigator);

  export default MyDrawerNavigator;