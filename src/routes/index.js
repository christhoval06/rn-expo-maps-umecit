import {createStackNavigator} from 'react-navigation';

import HomeScreen from '../screens/home';
import MainScreen from '../screens/main';

export default createStackNavigator({
		'/home': {
			screen: HomeScreen
		},
		'/main': {
			screen: MainScreen
		},
	},
	{
		initialRouteName: '/home',
	});
