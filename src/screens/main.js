import React, {Component} from 'react';
import {Button, Image, Text, View} from 'react-native';

import styles from '../styles';

export default class Main extends Component {
	render() {
		const {navigation} = this.props;
		const name = navigation.getParam('name', 'Main');
		return (
			<View style={[styles.container, styles.center]}>
				<Image style={styles.photo}
					   resizeMode={'contain'}
					   source={{uri: 'https://christhoval.xyz/static/media/christhoval_pro.dbcef379.jpeg'}}/>
				<Text style={[styles.text, styles.bold]}>{name}</Text>


				<Button
					onPress={() => navigation.goBack()}
					title="Return to Home"/>
			</View>
		);
	}
}
