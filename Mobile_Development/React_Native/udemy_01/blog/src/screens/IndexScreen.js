import React, { useContext, useEffect } from "react";
import {
	Text,
	View,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
	const {
		state: blogs,
		deleteBlogPost,
		getBlogPosts,
	} = useContext(BlogContext);

	useEffect(() => {
		// fetch the blogposts from the json-server when the component renders for 1st time
		getBlogPosts();

		// this will refetch the blogposts when IndexScreen is in focus
		const listener = navigation.addListener("didFocus", () => {
			getBlogPosts();
		});

		/* IMPORTANT: Any function that we return from useEffect is automatically executed when a
		component is removed from the navigation stack 
		Therefore, it is best ideal for cleanup */
		return () => {
			/* IMPORTANT: If we don't remove the listener when a screen is removed from navigation stack,
			it will cause memory leaks */
			listener.remove();
		};
	}, []);

	return (
		<>
			<FlatList
				data={blogs}
				keyExtractor={(blog) => `${blog.id}`}
				renderItem={({ item: blog }) => {
					return (
						<View style={styles.blog}>
							<TouchableOpacity
								onPress={() => {
									navigation.navigate("Show", {
										id: blog.id,
									});
								}}
								style={styles.titleContainer}
							>
								<Text style={styles.blogTitle}>
									{blog.title} - {blog.id}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => {
									deleteBlogPost(blog.id);
								}}
							>
								<Feather size={30} name="trash" />
							</TouchableOpacity>
						</View>
					);
				}}
			/>
		</>
	);
};

IndexScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("Create");
				}}
			>
				<Feather name="plus" size={30} />
			</TouchableOpacity>
		),
	};
};

const styles = StyleSheet.create({
	blog: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderColor: "#000",
		borderBottomWidth: 1,
		paddingHorizontal: 6,
	},
	blogTitle: {
		fontSize: 18,
		margin: 10,
	},
	titleContainer: {
		flex: 1,
	},
});

export default IndexScreen;
