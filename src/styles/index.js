import {StyleSheet} from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	center   : {
		alignItems    : 'center',
		justifyContent: 'center',
	},
	text     : {
		color: 'black',
	},
	bold     : {
		fontWeight: '900',
		fontSize  : 30,
	},
	photo    : {
		width       : 180,
		height      : 180,
		borderRadius: 180 / 2,
	}
});
