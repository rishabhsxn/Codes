import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BlogContext } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
	const { state } = useContext(BlogContext);
	const id = navigation.getParam("id");

	const blogPost = state.find((blog) => blog.id === id);

	return (
		<View>
			<Text>Show Screen</Text>
			<Text>{blogPost.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ShowScreen;
