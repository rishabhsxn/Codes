import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
	const id = navigation.getParam("id");

	const { state, editBlogPost } = useContext(BlogContext);
	const blogPost = state.find((blog) => blog.id === id);

	return (
		<BlogPostForm
			initialValues={{ title: blogPost.title, content: blogPost.content }}
			onSubmit={(title, content) => {
				editBlogPost(id, title, content, () => {
					navigation.pop();
				});
			}}
		/>
	);
};

const styles = StyleSheet.create({});

export default EditScreen;
