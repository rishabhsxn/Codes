import createDataContext from "./createDataContext";
import tracker from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const initialState = {
	token: null,
	errorMessage: "",
};

const authReducer = (state, action) => {
	switch (action.type) {
		case "SIGNIN":
			return { token: action.payload, errorMessage: "" };
		case "ERROR_MESSAGE":
			return { token: null, errorMessage: action.payload };
		case "CLEAR_ERROR":
			return { ...state, errorMessage: "" };
		case "SIGN_OUT":
			return { token: null, errorMessage: "" };
		default:
			return state;
	}
};

const tryLocalSignin = (dispatch) => {
	return async () => {
		// check if token is present in AsyncStorage
		const token = await AsyncStorage.getItem("token");
		// if yes, store token in state and navigate to mainFlow, else to signup
		if (token) {
			dispatch({ type: "SIGNIN", payload: token });
			navigate("TrackList");
		} else navigate("Signup");
	};
};

const clearErrorMessage = (dispatch) => {
	return () => {
		dispatch({ type: "CLEAR_ERROR" });
	};
};

const signup = (dispatch) => {
	return async (email, password) => {
		try {
			// make post request to api with email and password
			const response = await tracker.post("/signup", { email, password });
			await AsyncStorage.setItem("token", response.data.token);
			// success => save incoming token
			dispatch({ type: "SIGNIN", payload: response.data.token });
			// then navigate to mainFlow
			navigate("TrackList");
		} catch (err) {
			// fail => save error message
			dispatch({
				type: "ERROR_MESSAGE",
				payload: "Something went wrong!",
			});
		}
	};
};

const signin = (dispatch) => {
	return async (email, password) => {
		// similar to signup
		try {
			const response = await tracker.post("/signin", { email, password });
			await AsyncStorage.setItem("token", response.data.token);
			dispatch({ type: "SIGNIN", payload: response.data.token });
			navigate("TrackList");
		} catch (err) {
			dispatch({
				type: "ERROR_MESSAGE",
				payload: "Something went wrong!",
			});
		}
	};
};

const signout = (dispatch) => {
	return async () => {
		// remove the token from AsyncStorage and state
		await AsyncStorage.removeItem("token");
		dispatch({ type: "SIGN_OUT" });
		// navigate to authFlow
		navigate("loginFlow");
	};
};

export const { Context: AuthContext, Provider: AuthProvider } =
	createDataContext(
		authReducer,
		{ signin, signup, signout, clearErrorMessage, tryLocalSignin },
		initialState
	);
