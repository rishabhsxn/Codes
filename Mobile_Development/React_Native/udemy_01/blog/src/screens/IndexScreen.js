import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
	const value = useContext(BlogContext);
	return (
		<View>
			<Text>Index Screen</Text>
			<Text>{value}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default IndexScreen;
