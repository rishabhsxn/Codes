import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

import { AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";

const AccountScreen = () => {
	const { signout } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<Spacer>
				<Text style={styles.title}>AccountScreen</Text>
			</Spacer>
			<Spacer>
				<Button title="Sign Out" onPress={signout} />
			</Spacer>
		</View>
	);
};

export default AccountScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		fontSize: 28,
	},
});
