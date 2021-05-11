import createDataContext from "./createDataContext";

const initialBlogs = [{ id: 1, title: "Test Blog", content: "Test Content" }];

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

		case "DELETE_BLOGPOST":
			return state.filter((blog) => blog.id !== action.payload);

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

const deleteBlogPost = (dispatch) => {
	return (id) => {
		dispatch({ type: "DELETE_BLOGPOST", payload: id });
	};
};

/* Pass our reducer, object containing callbacks to dispatch action & initialState
and Receive the custom created Context & Provider from the function */
export const { Context: BlogContext, Provider: BlogProvider } =
	createDataContext(
		blogReducer,
		{ addBlogPost, deleteBlogPost },
		initialBlogs
	);
