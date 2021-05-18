import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
	return (
		<View>
			<Text>TrackListScreen</Text>
			<Button
				title="Go to TrackDetails"
				onPress={() => {
					navigation.navigate("TrackDetail");
				}}
			/>
		</View>
	);
};

export default TrackListScreen;

const styles = StyleSheet.create({});
