import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
	const friends = [
		{ name: "friend#1" },
		{ name: "friend#2" },
		{ name: "friend#3" },
		{ name: "friend#4" },
		{ name: "friend#5" },
		{ name: "friend#6" },
		{ name: "friend#7" },
		{ name: "friend#8" },
		{ name: "friend#9" },
	];

	return (
		<FlatList
			// horizontal
			// showsHorizontalScrollIndicator={false}
			data={friends}
			keyExtractor={(item) => item.name} // key should be a string and unique
			renderItem={({ item }) => (
				<Text style={styles.textStyle}>{item.name}</Text>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 20,
		marginVertical: 30,
	},
});

export default ListScreen;
