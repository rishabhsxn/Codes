import React, { useReducer } from "react";

const BlogContext = React.createContext();

/* 1. We need the functionality to modify blogs and re-render screen, so we need to use state. */
const initialBlogs = [
	{ title: "Blog #1" },
	{ title: "Blog #2" },
	{ title: "Blog #3" },
	{ title: "Blog #4" },
	{ title: "Blog #5" },
];

const blogReducer = (state, action) => {
	switch (action.type) {
		case "ADD_BLOGPOST":
			return [...state, { title: `Blog #${state.length + 1}` }];
		default:
			return state;
	}
};

export const BlogProvider = ({ children }) => {
	const [blogPosts, dispatch] = useReducer(blogReducer, initialBlogs);

	/* 2. helper function that will modify state variable in child component */
	const addBlogPost = () => {
		dispatch({ type: "ADD_BLOGPOST" });
	};

	/* 3. To pass the callback and blog posts, we will pass them as an object {data, addBlogPost} */
	return (
		<BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
			{children}
		</BlogContext.Provider>
	);
};

export default BlogContext;
