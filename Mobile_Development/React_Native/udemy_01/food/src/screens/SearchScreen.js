import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
	const [term, setTerm] = useState("");

	return (
		<View style={{ backgroundColor: "#fff" }}>
			<SearchBar
				term={term}
				onTermChange={(newTerm) => {
					setTerm(newTerm);
				}}
				onTermSubmit={() => console.log("Submitted")}
			/>
			<Text>{term}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
