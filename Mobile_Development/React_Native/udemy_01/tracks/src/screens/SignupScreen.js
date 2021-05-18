import React, { useState, useContext } from "react";
import {
	StyleSheet,
	View,
	KeyboardAvoidingView,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";

import { AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { state, signup } = useContext(AuthContext);

	return (
		<KeyboardAvoidingView>
			<ScrollView contentContainerStyle={styles.container}>
				<View>
					<Spacer>
						<Text h3>Sign Up for Tracks</Text>
					</Spacer>
					<Spacer>
						<Input
							label="Email"
							value={email}
							onChangeText={setEmail}
							autoCapitalize="none"
							autoCorrect={false}
						/>
						<Input
							label="Password"
							value={password}
							onChangeText={setPassword}
							autoCapitalize="none"
							autoCorrect={false}
							secureTextEntry
							errorMessage={
								state.errorMessage ? state.errorMessage : null
							}
							errorStyle={{
								fontSize: 17,
								marginLeft: -10,
							}}
						/>
					</Spacer>
					<Spacer>
						<Button
							title="Sign Up"
							onPress={() => signup(email, password)}
						/>
					</Spacer>
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
				</View>
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
	errorStyle: {
		fontSize: 17,
		color: "red",
		marginLeft: 15,
	},
	link: {
		fontSize: 16,
		color: "blue",
	},
});
