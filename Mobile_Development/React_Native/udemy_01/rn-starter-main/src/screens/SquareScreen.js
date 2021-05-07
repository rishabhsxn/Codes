import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorAdjuster from "../components/ColorAdjuster";

const COLOR_CHANGE_FACTOR = 15;

const SquareScreen = () => {
	const [redCount, setRedCount] = useState(0);
	const [greenCount, setGreenCount] = useState(0);
	const [blueCount, setBlueCount] = useState(0);

	return (
		<View style={{ marginHorizontal: 15 }}>
			<ColorAdjuster
				colorName="Red"
				onIncrease={() => setRedCount(redCount + COLOR_CHANGE_FACTOR)}
				onDecrease={() => setRedCount(redCount - COLOR_CHANGE_FACTOR)}
			/>
			<ColorAdjuster
				colorName="Green"
				onIncrease={() =>
					setGreenCount(greenCount + COLOR_CHANGE_FACTOR)
				}
				onDecrease={() =>
					setGreenCount(greenCount - COLOR_CHANGE_FACTOR)
				}
			/>
			<ColorAdjuster
				colorName="Blue"
				onIncrease={() => setBlueCount(blueCount + COLOR_CHANGE_FACTOR)}
				onDecrease={() => setBlueCount(blueCount - COLOR_CHANGE_FACTOR)}
			/>
			<View
				style={{
					height: 100,
					width: 100,
					backgroundColor: `rgb(${redCount}, ${greenCount}, ${blueCount})`,
					marginTop: 15,
				}}
			></View>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SquareScreen;
