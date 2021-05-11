import React from "react";

const BlogContext = React.createContext();

const blogs = [
	{ title: "Blog #1" },
	{ title: "Blog #2" },
	{ title: "Blog #3" },
	{ title: "Blog #4" },
	{ title: "Blog #5" },
];

export const BlogProvider = ({ children }) => {
	return (
		<BlogContext.Provider value={blogs}>{children}</BlogContext.Provider>
	);
};

export default BlogContext;
