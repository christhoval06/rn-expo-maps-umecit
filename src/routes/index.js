import {createStackNavigator} from 'react-navigation';

import HomeScreen from '../screens/home';
import MainScreen from '../screens/main';
import InstagramScreen from '../screens/instagram';

export default createStackNavigator({
		'/ig'  : {
			screen           : InstagramScreen,
			navigationOptions: {
				headerTitle: 'Instagram Clone'
			}
		},
		'/home': {
			screen: HomeScreen
		},
		'/main': {
			screen: MainScreen
		},
	},
	{
		initialRouteName: '/ig',
	});
