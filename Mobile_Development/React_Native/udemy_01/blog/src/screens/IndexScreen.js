import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList, Button } from "react-native";
import { BlogContext } from "../context/BlogContext";

const IndexScreen = () => {
	const { state: blogs, addBlogPost } = useContext(BlogContext);

	return (
		<View>
			<Button title="Add Blog" onPress={addBlogPost} />
			<FlatList
				data={blogs}
				keyExtractor={(blog) => blog.title}
				renderItem={({ item: blog }) => {
					return <Text>{blog.title}</Text>;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default IndexScreen;
