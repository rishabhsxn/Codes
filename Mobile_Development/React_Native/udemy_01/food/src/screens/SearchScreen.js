import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	const searchAPI = async (searchTerm) => {
		try {
			const response = await yelp.get("/search", {
				// These params will be added in the link as arguments
				params: {
					term: searchTerm,
					limit: 50,
					location: "san jose",
				},
			});

			setResults(response.data.businesses);
		} catch (err) {
			setErrorMessage("Something went wrong.");
		}
	};

	useEffect(() => {
		searchAPI("Pasta");
	}, []); // this will run the callback only after the 1st render

	return (
		<View style={{ backgroundColor: "#fff", flex: 1 }}>
			<SearchBar
				term={term}
				onTermChange={setTerm} // condensed form of {(newTerm) => setTerm(newTerm)}
				onTermSubmit={searchAPI}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<Text>We have found {results.length} results.</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
