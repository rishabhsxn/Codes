import React, { useContext, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

import { AuthContext } from "../context/AuthContext";

const AuthResolveScreen = () => {
	const { tryLocalSignin } = useContext(AuthContext);

	// when app is opened from dead state, check if token is present and navigate accordingly
	useEffect(() => {
		// setTimeout(tryLocalSignin, 1000);
		tryLocalSignin();
	}, []);

	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" color="blue" />
		</View>
	);
};

AuthResolveScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

export default AuthResolveScreen;

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: "#fff", justifyContent: "center" },
});
