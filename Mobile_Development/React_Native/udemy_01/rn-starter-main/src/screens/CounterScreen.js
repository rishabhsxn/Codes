import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const INCREMENT_FACTOR = 1;

const reducer = (state, action) => {
	switch (action.type) {
		case "INCREASE_COUNTER":
			return { ...state, counter: state.counter + action.payload };
		case "DECREASE_COUNTER":
			return { ...state, counter: state.counter - action.payload };
		default:
			return state;
	}
};

const CounterScreen = () => {
	const [state, dispatch] = useReducer(reducer, { counter: 0 });
	// const [counter, setCounter] = useState(0); // [variableName, setterFunctionName] = useState(initialValue)
	// IMPORTANT: Don't modify the state varible directly, only use setterFunction

	return (
		<View>
			<Button
				title="Increase"
				onPress={() => {
					dispatch({
						type: "INCREASE_COUNTER",
						payload: INCREMENT_FACTOR,
					});
				}}
			/>

			<Button
				title="Decrease"
				onPress={() => {
					dispatch({
						type: "DECREASE_COUNTER",
						payload: INCREMENT_FACTOR,
					});
				}}
			/>

			<Text>Counter: {state.counter}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default CounterScreen;
