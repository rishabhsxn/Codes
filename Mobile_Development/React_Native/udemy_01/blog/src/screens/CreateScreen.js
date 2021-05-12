import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
	const { addBlogPost } = useContext(BlogContext);

	return (
		<BlogPostForm
			onSubmit={(title, content) => {
				/* We can pass a callback to navigate to IndexScren to addBlogPost(), so that it will call it when
				the action is successfully dispatched.
				This will work perfectly when we even have an API call before dispatch or any error during dispatch. */
				addBlogPost(title, content, () => {
					navigation.navigate("Index");
				});
			}}
		/>
	);
};

const styles = StyleSheet.create({});

export default CreateScreen;
