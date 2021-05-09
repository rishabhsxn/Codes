import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.container}>
			<Feather name="search" style={styles.searchIcon} />
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				placeholder="Search"
				style={styles.inputContainer}
				value={term}
				onChangeText={onTermChange}
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#F0EEEE",
		height: 35,
		marginVertical: 10,
		borderRadius: 4,
		marginHorizontal: 15,
		flexDirection: "row",
	},
	inputContainer: {
		flex: 1,
		fontSize: 17,
	},
	searchIcon: {
		fontSize: 30,
		alignSelf: "center",
		marginHorizontal: 5,
	},
});

export default SearchBar;

// #F0EEEE
