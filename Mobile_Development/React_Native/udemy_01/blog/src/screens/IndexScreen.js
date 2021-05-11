import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
	const blogs = useContext(BlogContext);

	return (
		<View>
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
