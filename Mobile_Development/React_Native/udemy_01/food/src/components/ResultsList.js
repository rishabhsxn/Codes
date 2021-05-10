import React from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import ResultItem from "./ResultItem";

const ResultsList = ({ title, results }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.titleStyle}>{title}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={results}
				keyExtractor={(result) => result.id}
				renderItem={({ item }) => <ResultItem result={item} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
	},
	titleStyle: {
		fontSize: 18,
		fontWeight: "bold",
		marginLeft: 15,
		marginBottom: 5,
	},
});

export default ResultsList;
