import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
	const [counter, setCounter] = useState(0); // [variableName, setterFunctionName] = useState(initialValue)
	// IMPORTANT: Don't modify the state varible directly, only use setterFunction

	return (
		<View>
			<Button
				title="Increase"
				onPress={() => {
					setCounter(counter + 1);
				}}
			/>

			<Button
				title="Decrease"
				onPress={() => {
					setCounter(counter - 1);
				}}
			/>

			<Text>Counter: {counter}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default CounterScreen;
