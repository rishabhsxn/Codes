import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ResultsList = ({ title, results }) => {
	return (
		<View>
			<Text style={styles.titleStyle}>{title}</Text>
			<Text>{results.length} Results</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 18,
		fontWeight: "bold",
	},
});

export default ResultsList;
