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
		default:
			return state;
	}
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
	return () => {};
};

export const { Context: AuthContext, Provider: AuthProvider } =
	createDataContext(authReducer, { signin, signup, signout }, initialState);
