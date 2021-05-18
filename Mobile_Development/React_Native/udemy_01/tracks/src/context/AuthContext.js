import createDataContext from "./createDataContext";
import tracker from "../api/tracker";

const initialState = {
	token: "",
	errorMessage: "",
};

const authReducer = (state, action) => {
	switch (action.type) {
		case "SIGNIN":
			return { token: action.payload, errorMessage: "" };
		case "ERROR_MESSAGE":
			return { token: "", errorMessage: action.payload };
		default:
			return state;
	}
};

const signup = (dispatch) => {
	return async (email, password) => {
		try {
			// make post request to api with email and password
			const response = await tracker.post("/signup", { email, password });
			// success => save incoming token
			dispatch({ type: "SIGNIN", payload: response.data.token });
			// then navigate to mainFlow
		} catch (err) {
			// fail => save error message
			dispatch({ type: "ERROR_MESSAGE", payload: err.message });
		}
	};
};

const signin = (dispatch) => {
	return ({ email, password }) => {
		// similar to signup
	};
};

const signout = (dispatch) => {
	return () => {};
};

export const { Context: AuthContext, Provider: AuthProvider } =
	createDataContext(authReducer, { signin, signup, signout }, initialState);
