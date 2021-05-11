import React, { useContext } from "react";
import {
	Text,
	View,
	StyleSheet,
	FlatList,
	Button,
	TouchableOpacity,
} from "react-native";
import { BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
	const { state: blogs, addBlogPost } = useContext(BlogContext);

	return (
		<>
			<Button title="Add Blog" onPress={addBlogPost} />
			<FlatList
				data={blogs}
				keyExtractor={(blog) => blog.title}
				renderItem={({ item: blog }) => {
					return (
						<View style={styles.blog}>
							<Text style={styles.blogTitle}>{blog.title}</Text>
							<TouchableOpacity onPress={() => {}}>
								<Feather size={30} name="trash" />
							</TouchableOpacity>
						</View>
					);
				}}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	blog: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 10,
		borderColor: "#000",
		borderBottomWidth: 1,
	},
	blogTitle: {
		fontSize: 18,
	},
});

export default IndexScreen;
