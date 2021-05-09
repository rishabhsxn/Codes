import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [results, setResults] = useState([]);

	const searchAPI = async () => {
		const response = await yelp.get("/search", {
			// These params will be added in the link as arguments
			params: {
				term,
				limit: 50,
				location: "san jose",
			},
		});

		setResults(response.data.businesses);
	};

	return (
		<View style={{ backgroundColor: "#fff" }}>
			<SearchBar
				term={term}
				onTermChange={setTerm} // condensed form of {(newTerm) => setTerm(newTerm)}
				onTermSubmit={searchAPI}
			/>
			<Text>We have found {results.length} results.</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
