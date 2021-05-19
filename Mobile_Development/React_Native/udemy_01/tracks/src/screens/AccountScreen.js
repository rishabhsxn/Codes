import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";

const AccountScreen = () => {
	const { signout } = useContext(AuthContext);

	return (
		<SafeAreaView style={styles.container}>
			<Spacer>
				<Text style={styles.title}>AccountScreen</Text>
			</Spacer>
			<Spacer>
				<Button title="Sign Out" onPress={signout} />
			</Spacer>
		</SafeAreaView>
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
