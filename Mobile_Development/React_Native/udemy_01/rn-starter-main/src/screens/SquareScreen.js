import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorAdjuster from "../components/ColorAdjuster";

const COLOR_CHANGE_FACTOR = 15;

/* Reducer   ===  functionToManageChangesToAnObject
   Dispatch  ===  runMyReducer
   Action    ===  howToChangeState 
*/

const reducer = (state, action) => {
	// state === { red: number, green: number, blue: number }
	// action === { whatToDo: 'change_red' || 'change_green' || 'change_blue', amount: number }

	switch (action.type) {
		/* Don't mutate the state directly, instead pass a new state object.
		{ ...state, red: state.red } will spread the previous state into new object and overwrite the property red */
		case "CHANGE_RED":
			return state.red + action.payload > 255 ||
				state.red + action.payload < 0
				? state
				: { ...state, red: state.red + action.payload };

		case "CHANGE_GREEN":
			return state.green + action.payload > 255 ||
				state.green + action.payload < 0
				? state
				: { ...state, green: state.green + action.payload };

		case "CHANGE_BLUE":
			return state.blue + action.payload > 255 ||
				state.blue + action.payload < 0
				? state
				: { ...state, blue: state.blue + action.payload };

		default:
			return state;
	}
};

const SquareScreen = () => {
	const [state, dispatch] = useReducer(reducer, {
		red: 0,
		green: 0,
		blue: 0,
	});

	const { red, green, blue } = state;

	// prettier-ignore
	return (
		<View style={{ marginHorizontal: 15 }}>
			<ColorAdjuster
				colorName="Red"
				onIncrease={() => dispatch({ type: "CHANGE_RED", payload: COLOR_CHANGE_FACTOR })}
				onDecrease={() => dispatch({ type: "CHANGE_RED", payload: -1 * COLOR_CHANGE_FACTOR })}
			/>
			<ColorAdjuster
				colorName="Green"
				onIncrease={() => dispatch({ type: "CHANGE_GREEN", payload: COLOR_CHANGE_FACTOR })}
				onDecrease={() => dispatch({ type: "CHANGE_GREEN", payload: -1 * COLOR_CHANGE_FACTOR })}
			/>
			<ColorAdjuster
				colorName="Blue"
				onIncrease={() => dispatch({ type: "CHANGE_BLUE", payload: COLOR_CHANGE_FACTOR })}
				onDecrease={() => dispatch({ type: "CHANGE_BLUE", payload: -1 * COLOR_CHANGE_FACTOR })}
			/>
			<View
				style={{
					height: 100,
					width: 100,
					backgroundColor: `rgb(${red}, ${green}, ${blue})`,
					marginTop: 15,
				}}
			></View>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SquareScreen;
