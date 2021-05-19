import React, { useContext } from "react";
import { StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

import { AuthContext } from "../context/AuthContext";

const SignupScreen = () => {
	const { state, signup, clearErrorMessage } = useContext(AuthContext);

	return (
		<KeyboardAvoidingView>
			<ScrollView contentContainerStyle={styles.container}>
				<NavigationEvents onWillFocus={clearErrorMessage} />
				<AuthForm
					title="Sign Up for Tracks"
					errorMessage={state.errorMessage}
					submitButtonText="Sign Up"
					onSubmit={signup}
				/>
				<NavLink
					routeName="Signin"
					linkText="Already have an Account? Sign In"
				/>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

SignupScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

export default SignupScreen;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 100,
	},
});
