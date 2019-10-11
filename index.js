
import {AppRegistry} from 'react-native';
import Setup from './src/boot/setup';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Setup);