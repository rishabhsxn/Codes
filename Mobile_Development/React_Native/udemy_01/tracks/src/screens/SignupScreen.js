import React, { useState } from "react";
import {
	StyleSheet,
	View,
	KeyboardAvoidingView,
	ScrollView,
} from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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
						/>
					</Spacer>
					<Spacer>
						<Button title="Sign Up" />
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
});
