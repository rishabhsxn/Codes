import React, { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { BlogContext } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
	const id = navigation.getParam("id");

	const { state } = useContext(BlogContext);
	const blogPost = state.find((blog) => blog.id === id);

	const [title, setTitle] = useState(blogPost.title);
	const [content, setContent] = useState(blogPost.content);

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Enter Title:</Text>
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				style={styles.inputContainer}
				value={title}
				onChangeText={(newText) => {
					setTitle(newText);
				}}
			/>
			<Text style={styles.label}>Enter Content:</Text>
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				style={styles.inputContainer}
				value={content}
				onChangeText={(newText) => {
					setContent(newText);
				}}
			/>

			<Button title="Save Post" onPress={() => {}} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		paddingTop: 20,
	},
	label: {
		fontSize: 20,
		fontWeight: "bold",
	},
	inputContainer: {
		fontSize: 18,
		borderColor: "#000",
		borderWidth: 1,
		marginBottom: 15,
		padding: 4,
	},
});

export default EditScreen;
