import React from "react";
import { Text, StyleSheet, Button, TouchableOpacity, View } from "react-native";

const HomeScreen = ({ navigation }) => {
	// console.log(navigation);
	return (
		<View>
			<Text style={styles.text}>Hi there!</Text>

			<Button
				title="Go to Component Screen"
				onPress={() => {
					navigation.navigate("Component");
				}}
			/>

			{/* <TouchableOpacity
				onPress={() => {
					navigation.navigate("List");
				}}
			>
				<Text>Go to List Screen</Text>
			</TouchableOpacity> */}
			<Button
				title="Go to List Screen"
				onPress={() => {
					navigation.navigate("List");
				}}
			/>

			<Button
				title="Go to Images Screen"
				onPress={() => {
					navigation.navigate("ImageS");
				}}
			/>

			<Button
				title="Go to Counter Screen"
				onPress={() => {
					navigation.navigate("Counter");
				}}
			/>

			<Button
				title="Go to Color Screen"
				onPress={() => {
					navigation.navigate("Color");
				}}
			/>

			<Button
				title="Go to Square Screen"
				onPress={() => {
					navigation.navigate("Square");
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default HomeScreen;
