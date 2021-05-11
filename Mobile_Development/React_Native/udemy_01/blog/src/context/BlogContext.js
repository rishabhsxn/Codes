import createDataContext from "./createDataContext";

const initialBlogs = [
	{ title: "Blog #1", id: 1 },
	{ title: "Blog #2", id: 2 },
	{ title: "Blog #3", id: 3 },
];

const blogReducer = (state, action) => {
	switch (action.type) {
		case "ADD_BLOGPOST":
			return [
				...state,
				{
					title: `Blog #${state.length + 1}`,
					id: Math.floor(Math.random() * 99999),
				},
			];
		default:
			return state;
	}
};

/* Helper function that will modify state variable in child component */
/* IMPORTANT: We don't have the dispatch function here anymore, so we receive dispatch function as parameter,
then return a callback that will call the dispatch function to send our action. */
const addBlogPost = (dispatch) => {
	return () => {
		dispatch({ type: "ADD_BLOGPOST" });
	};
};

/* Pass our reducer, object containing callbacks to dispatch action & initialState
and Receive the custom created Context & Provider from the function */
export const { Context: BlogContext, Provider: BlogProvider } =
	createDataContext(blogReducer, { addBlogPost }, initialBlogs);
