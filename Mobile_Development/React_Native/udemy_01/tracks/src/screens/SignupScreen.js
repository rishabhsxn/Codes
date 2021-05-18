import React, { useContext } from "react";
import {
	StyleSheet,
	KeyboardAvoidingView,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import AuthForm from "../components/AuthForm";

import { AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
	const { state, signup } = useContext(AuthContext);

	return (
		<KeyboardAvoidingView>
			<ScrollView contentContainerStyle={styles.container}>
				<AuthForm
					title="Sign Up for Tracks"
					errorMessage={state.errorMessage}
					submitButtonText="Sign Up"
					onSubmit={signup}
				/>
				<Spacer>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate("Signin");
						}}
					>
						<Text style={styles.link}>
							Already have an Account? Sign In
						</Text>
					</TouchableOpacity>
				</Spacer>
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
	link: {
		fontSize: 16,
		color: "blue",
	},
});
