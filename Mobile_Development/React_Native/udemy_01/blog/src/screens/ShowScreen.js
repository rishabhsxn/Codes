import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { BlogContext } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
	const { state } = useContext(BlogContext);
	const id = navigation.getParam("id");

	const blogPost = state.find((blog) => blog.id === id);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{blogPost.title}</Text>
			<Text style={styles.content}>{blogPost.content}</Text>
		</View>
	);
};

ShowScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("Edit", {
						id: navigation.getParam("id"),
					});
				}}
			>
				<EvilIcons name="pencil" size={43} />
			</TouchableOpacity>
		),
	};
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: "#fff",
		flex: 1,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 20,
	},
	content: {
		fontSize: 18,
	},
});

export default ShowScreen;
