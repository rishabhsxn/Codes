import React from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
	return (
		<View style={{ backgroundColor: "#fff" }}>
			<SearchBar />
			<Text>Search Screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
