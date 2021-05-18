import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
	return (
		<View>
			<Text>SignupScreen</Text>
			<Button
				title="Go to Sign in"
				onPress={() => {
					navigation.navigate("Signin");
				}}
			/>
			<Button
				title="Go to mainflow"
				onPress={() => {
					navigation.navigate("mainFlow");
				}}
			/>
		</View>
	);
};

export default SignupScreen;

const styles = StyleSheet.create({});
