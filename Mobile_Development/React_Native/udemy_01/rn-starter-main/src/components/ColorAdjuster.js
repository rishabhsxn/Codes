import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorAdjuster = ({ colorName, onIncrease, onDecrease }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{colorName}</Text>

			<Button
				title={`More ${colorName}`}
				onPress={() => {
					onIncrease();
				}}
			/>

			<Button
				title={`Less ${colorName}`}
				onPress={() => {
					onDecrease();
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 15,
	},
	title: {
		fontSize: 22,
	},
});

export default ColorAdjuster;
