import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Animated,
	TouchableOpacity,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Icon, Button } from 'native-base';

export const Separator = () => <View style={styles.separator} />;

const LeftActions = ({ progress, dragX, onPress }) => {
	const scale = dragX.interpolate({
		inputRange: [0, 100],
		outputRange: [0, 1],
		extrapolate: 'clamp',
	});
	return (
		// <TouchableOpacity onPress={onPress}>
		<View style={styles.leftAction}>
			{/* <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
					Add to Cart
				</Animated.Text> */}
			<Button
				onPress={onPress}
				style={styles.btnLeft}
				full>
				<Icon name="information-circle" />
			</Button>
		</View>
		// </TouchableOpacity>
	);
};

const RightActions = ({ progress, dragX, onPress }) => {
	const scale = dragX.interpolate({
		inputRange: [-100, 0],
		outputRange: [1, 0],
		extrapolate: 'clamp',
	});
	return (
		// <TouchableOpacity onPress={onPress}>
		<View style={styles.rightAction}>
			{/* <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
					Delete
        </Animated.Text> */}
			<Button
				onPress={onPress}
				style={styles.btnRight}
				full
				danger>
				<Icon name="trash" />
			</Button>
		</View>
		// </TouchableOpacity>
	);
};

// Source Code:  https://www.reactnativeschool.com/swipe-gestures-with-react-native-gesture-handler

const PersonItems = ({ name, onSwipeFromLeft, onRightPress }) => {
	return (
		<Swipeable
			renderLeftActions={(progress, dragX) => (
				<LeftActions
					progress={progress}
					dragX={dragX}
					onPress={onSwipeFromLeft} />
			)}
			// onSwipeableLeftOpen={onSwipeFromLeft}
			renderRightActions={(progress, dragX) => (
				<RightActions
					progress={progress}
					dragX={dragX}
					onPress={onRightPress} />
			)}
		>

			<View style={styles.container}>

				<Text style={styles.text}>{name}</Text>

			</View>

		</Swipeable>
	);
}


const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		paddingHorizontal: 10,
		paddingVertical: 20,
	},
	text: {
		color: '#4a4a4a',
		fontSize: 15,
	},
	separator: {
		flex: 1,
		height: 1,
		backgroundColor: '#e4e4e4',
		marginLeft: 10,
	},
	leftAction: {
		// backgroundColor: '#388e3c',
		justifyContent: 'center',
		// flex: 1,
		backgroundColor: '#fff',
	},
	rightAction: {
		// backgroundColor: '#dd2c00',
		backgroundColor: '#fff',
		justifyContent: 'center',
		// flex: 1,
		alignItems: 'flex-end',
	},
	actionText: {
		color: '#fff',
		fontWeight: '600',
		padding: 20,
	},
	btnLeft: {
		height: '100%',
		padding: 20,
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10
	},
	btnRight: {
		height: '100%',
		padding: 20,
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10
	}
});

export default PersonItems;
