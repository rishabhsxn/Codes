import createDataContext from "./createDataContext";

const initialBlogs = [{ id: 1, title: "Test Blog", content: "Test Content" }];

const blogReducer = (state, action) => {
	switch (action.type) {
		case "ADD_BLOGPOST":
			return [
				...state,
				{
					id: Math.floor(Math.random() * 99999),
					title: action.payload.title,
					content: action.payload.content,
				},
			];

		case "DELETE_BLOGPOST":
			return state.filter((blog) => blog.id !== action.payload);

		case "EDIT_BLOGPOST":
			const updatedBlogPost = {
				id: action.payload.id,
				title: action.payload.title,
				content: action.payload.content,
			};
			return state.map((blog) =>
				blog.id === action.payload.id ? updatedBlogPost : blog
			);

		default:
			return state;
	}
};

/* Helper function that will modify state variable in child component */
/* IMPORTANT: We don't have the dispatch function here anymore, so we receive dispatch function as parameter,
then return a callback that will call the dispatch function to send our action. */
const addBlogPost = (dispatch) => {
	return (title, content, callback) => {
		dispatch({ type: "ADD_BLOGPOST", payload: { title, content } });
		if (callback) callback();
	};
};

const deleteBlogPost = (dispatch) => {
	return (id) => {
		dispatch({ type: "DELETE_BLOGPOST", payload: id });
	};
};

const editBlogPost = (dispatch) => {
	return (id, title, content, callback) => {
		dispatch({ type: "EDIT_BLOGPOST", payload: { id, title, content } });
		if (callback) callback();
	};
};

/* Pass our reducer, object containing callbacks to dispatch action & initialState
and Receive the custom created Context & Provider from the function */
export const { Context: BlogContext, Provider: BlogProvider } =
	createDataContext(
		blogReducer,
		{ addBlogPost, deleteBlogPost, editBlogPost },
		initialBlogs
	);
