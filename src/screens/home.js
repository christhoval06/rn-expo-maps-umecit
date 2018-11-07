import React, {Component} from 'react';
import { Text, View } from 'react-native';

import styles from '../styles';

export default class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={[styles.text, styles.bold]}>Home</Text>
				<Text style={styles.text}>Screen</Text>

			</View>
		);
	}
}
