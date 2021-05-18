import createDataContext from "./createDataContext";

const initialState = {
	token: "",
	errorMessage: "",
};

const authReducer = (state, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

const signup = (dispatch) => {
	return ({ email, password }) => {
		// make post request to api with email and password
		// success => save incoming token, then navigate to mainFlow
		// fail => save error message
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
