import React, { useContext } from "react";
import { StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

import { AuthContext } from "../context/AuthContext";

const SigninScreen = () => {
	const { state, signin } = useContext(AuthContext);

	return (
		<KeyboardAvoidingView>
			<ScrollView contentContainerStyle={styles.container}>
				<AuthForm
					title="Sign In to your Account"
					errorMessage={state.errorMessage}
					submitButtonText="Sign In"
					onSubmit={signin}
				/>
				<NavLink
					routeName="Signup"
					linkText="Don't have an Account? Sign Up"
				/>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

SigninScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

export default SigninScreen;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 100,
	},
});
