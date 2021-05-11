import createDataContext from "./createDataContext";

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

/* Helper function that will modify state variable in child component */
const addBlogPost = () => {
	dispatch({ type: "ADD_BLOGPOST" });
};

/* Pass our reducer, object containing callbacks to dispatch action & initialState
and Receive the custom created Context & Provider from the function */
export const { Context: BlogContext, Provider: BlogProvider } =
	createDataContext(blogReducer, { addBlogPost }, initialBlogs);
