import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

import Metrics from '../config/metrics';
import Colors from '../config/colors';

const POSTS = [
	{
		id      : 1,
		username: "christhoval",
		avatar  : "https://christhoval.xyz/static/media/christhoval_pro.dbcef379.jpeg",
		image   : 'https://picsum.photos/200/300/?random',
		views   : 12,
		date    : 'ago 12 min'
	},
	{
		id      : 2,
		username: "christhoval",
		avatar  : "https://christhoval.xyz/static/media/christhoval_pro.dbcef379.jpeg",
		image   : 'https://picsum.photos/200/300/?random',
		views   : 1,
		date    : 'ago 15 min'
	},
	{
		id      : 3,
		username: "christhoval",
		avatar  : "https://christhoval.xyz/static/media/christhoval_pro.dbcef379.jpeg",
		image   : 'https://picsum.photos/200/300/?random',
		views   : 4,
		date    : 'ago 12 hous'
	},
	{
		id      : 4,
		username: "christhoval",
		avatar  : "https://christhoval.xyz/static/media/christhoval_pro.dbcef379.jpeg",
		image   : 'https://picsum.photos/200/300/?random',
		views   : 5,
		date    : 'ago 12 weeks'
	},
	{
		id      : 5,
		username: "christhoval",
		avatar  : "https://christhoval.xyz/static/media/christhoval_pro.dbcef379.jpeg",
		image   : 'https://picsum.photos/200/300/?random',
		views   : 5,
		date    : 'ago 12 weeks'
	},
	{
		id      : 6,
		username: "christhoval",
		avatar  : "https://christhoval.xyz/static/media/christhoval_pro.dbcef379.jpeg",
		image   : 'https://picsum.photos/200/300/?random',
		views   : 5,
		date    : 'ago 12 weeks'
	},
	{
		id      : 7,
		username: "christhoval",
		avatar  : "https://christhoval.xyz/static/media/christhoval_pro.dbcef379.jpeg",
		image   : 'https://picsum.photos/200/300/?random',
		views   : 5,
		date    : 'ago 12 weeks'
	},
];

const PostItem = ({item, index}) => (
	<View key={index} style={[styles.ig__post_size, styles.ig__post_wrapper]}>
		<View style={[styles.ig_post_addons, styles.ig__post_top]}>
			<Image resizeMode="contain" style={styles.ig__post_avatar} source={{uri: item.avatar}}/>
			<Text style={styles.ig__post_date}>{item.date}</Text>
		</View>
		<Image style={[styles.ig__post_size, styles.ig__photo]}
			   source={{uri: item.image}}/>
		<View style={[styles.ig_post_addons, styles.ig__post_bottom]}>
			<View style={styles.ig__post_icons}>
				<Icon name="heart" color={Colors.red} size={26} style={styles.ig__post_icon}/>
				<Icon name="message1" color={Colors.black} size={26} style={styles.ig__post_icon}/>
			</View>
		</View>
	</View>
);

export default class Main extends Component {
	render() {
		return (
			<View style={styles.ig__container}>
				<FlatList
					data={POSTS}
					keyExtractor={e => e.id.toString()}
					renderItem={(data) => <PostItem {...data}/>}
					showsVerticalScrollIndicator={false}
					ItemSeparatorComponent={({highlighted}) => (
						<View style={[styles.ig__items_separator, highlighted && {marginLeft: 0}]}/>)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	ig__container      : {
		flex: 1,
	},
	ig__post_size      : {
		width : Metrics.DEVICE_WIDTH,
		height: 400,
	},
	ig__items_separator: {
		height: 5,
	},
	ig__post_wrapper   : {
		backgroundColor: 'rgba(0,0,0, .5)',
	},
	ig__photo          : {},
	ig_post_addons     : {
		backgroundColor: 'rgba(255,255,255, .5)',
		flexDirection  : 'row',
		height         : 60,
		position       : 'absolute',
		right          : 0,
		left           : 0,
		zIndex         : 2,
		padding        : 5,
		alignItems     : 'center',
		justifyContent : 'space-between',
	},
	ig__post_top       : {
		top: 0,
	},
	ig__post_bottom    : {
		bottom: 0,
	},
	ig__post_avatar    : {
		width       : 50,
		height      : 50,
		borderRadius: 50 / 2,
	},
	ig__post_date      : {
		color: Colors.text.primary,
	},
	ig__post_icons     : {
		flexDirection : 'row',
		alignItems    : 'center',
		justifyContent: 'space-between',

	},
	ig__post_icon      : {
		padding: 3

	}
});

