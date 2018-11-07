import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

import styles from '../styles';

export default class Home extends Component {
	render() {
		const {navigation} = this.props;
		return (
			<View style={styles.container}>
				<Text style={[styles.text, styles.bold]}>Home</Text>
				<Text style={styles.text}>Screen</Text>

				<Button
					onPress={() => navigation.navigate('/main', {name: 'Christhoval'})}
					title="Go to Main"/>
			</View>
		);
	}
}
