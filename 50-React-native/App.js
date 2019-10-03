import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import DisplayList from './displayList'

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
        <DisplayList test="props"/>
		 </View> 
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	}
});