// STEP 1: Import necessary libraries
import React from "react";
import { Text, StyleSheet, View } from "react-native";

// STEP 2: Create the component which should return a single component (tag)
const ComponentsScreen = () => {
	const greeting = "Hi there!";
	const customJsxElement = <Text>This is a JSX assigned to a variable.</Text>;

	return (
		<View>
			<Text style={styles.textStyle}>This is the components screen</Text>
			<Text>{greeting}</Text>
			{customJsxElement}
		</View>
	);
};

// STEP 3: Define styles using Stylesheet
const styles = StyleSheet.create({
	textStyle: {
		fontSize: 30,
	},
});

// STEP 4: Export the component
export default ComponentsScreen;
