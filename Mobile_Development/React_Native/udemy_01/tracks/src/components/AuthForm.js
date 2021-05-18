import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";

import Spacer from "./Spacer";

const AuthForm = ({ title, errorMessage, submitButtonText, onSubmit }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<View>
			<Spacer>
				<Text h3>{title}</Text>
			</Spacer>
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
				errorMessage={errorMessage ? errorMessage : null}
				errorStyle={{
					fontSize: 17,
				}}
			/>
			<Spacer>
				<Button
					title={submitButtonText}
					onPress={() => onSubmit(email, password)}
				/>
			</Spacer>
		</View>
	);
};

export default AuthForm;

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
