import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [searchAPI, results, errorMessage] = useResults();

	return (
		<View style={{ backgroundColor: "#fff", flex: 1 }}>
			<SearchBar
				term={term}
				onTermChange={setTerm} // condensed form of {(newTerm) => setTerm(newTerm)}
				onTermSubmit={() => searchAPI(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<Text>We have found {results.length} results.</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
