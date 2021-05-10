import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [searchAPI, results, errorMessage] = useResults();

	const filterResultsByPrice = (price) => {
		// price === '$' || '$$' || '$$$'
		return results.filter((result) => result.price === price);
	};

	return (
		<View style={{ backgroundColor: "#fff", flex: 1 }}>
			<SearchBar
				term={term}
				onTermChange={setTerm} // condensed form of {(newTerm) => setTerm(newTerm)}
				onTermSubmit={() => searchAPI(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<ScrollView>
				<ResultsList
					title="Cost Effective"
					results={filterResultsByPrice("$")}
				/>
				<ResultsList
					title="Bit Pricer"
					results={filterResultsByPrice("$$")}
				/>
				<ResultsList
					title="Big Spender!"
					results={filterResultsByPrice("$$$")}
				/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
