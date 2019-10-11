/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { View } from 'native-base';
import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { shallowEqual, useSelector } from 'react-redux';
import Login from './src/Authentification/Login';
import Drawer from './src/Drawer';

const GlobalNavigation = createStackNavigator({
  // For each screen that you can navigate to, create a new entry like this:
  Login: {
    // `ProfileScreen` is a React component that will be the main content of the screen.
    screen: Login,
    // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.
    // Optional: When deep linking or using react-navigation in a web app, this path is used:
    // path: 'people/:name',
    // The action and route params are extracted from the path.
    // Optional: Override the `navigationOptions` for the screen
    // navigationOptions: ({ navigation }) => ({
    //   title: `${navigation.state.params.name}'s Profile'`,
    // }),
    navigationOptions: {
      header: null,
    },
  },

  Drawer: {
    screen: Drawer,
    navigationOptions: {
      header: null,
    },
  },
});

const MyAppContainer = createAppContainer(GlobalNavigation);

export default function App(props) {
  const { appLoading } = useSelector(store => store.app, shallowEqual)
  return (
    <View style={{flex: 1}}>
      <Spinner
        style={{
          position: 'absolute',
          // left: '30%',
          top: '80%',
        }}
        visible={appLoading}
        overlayColor={null}
        color="blue"
      />
      <MyAppContainer />
    </View>
  );
}
