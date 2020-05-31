import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, Icon } from 'native-base';
import firebase from '../config/firebase';

import PersonItems, { Separator } from '../components/PersonItems';

const Person = (props) => {

	const quotes = [
		{ id: 1, name: 'Mohamed' },
		{ id: 2, name: 'Najathi' },
		{ id: 3, name: 'Naharni' },
		{ id: 4, name: 'Mohamed Thahlan' }
	];

	const logout = () => {
		try {
			firebase.auth()
				.signOut()
				.then(() => console.log('User signed out!'));
		} catch (err) {
			console.log(err.toString());
		}
	}

	return (
		<Container style={styles.container}>
			<Header style={{
				marginTop: StatusBar.currentHeight,
				backgroundColor: '#fff'
			}}>
				<Content style={styles.content}>
					<Item>
						<Input placeholder="Add name" />
						<Button>
							<Icon name="add" />
						</Button>
					</Item>
				</Content>
			</Header>
			<FlatList
				data={quotes}
				keyExtractor={(_, index) => index.toString()}
				renderItem={({ item }) => (
					<PersonItems
						{...item}
						onSwipeFromLeft={() => alert("swiped from left!")}
						onRightPress={() => alert("pressed right!")}
					/>
				)}
				ItemSeparatorComponent={() => <Separator />}
			/>
			<View style={styles.bottomContainer}>
				<Button style={styles.btn} onPress={logout} full><Text>Logout</Text></Button>
			</View>
		</Container>
	)
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	content: {
		backgroundColor: '#fff'
	},
	btn: {
		backgroundColor: '#ff5423'
	},
	bottomContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		alignItems: 'center'
	}
});

export default Person;
