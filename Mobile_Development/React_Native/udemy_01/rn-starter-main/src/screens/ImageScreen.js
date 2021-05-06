import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetails";

const ImageScreen = () => {
	return (
		<View>
			<ImageDetail
				title="Forest"
				imageSource={require("../../assets/forest.jpg")}
			/>
			<ImageDetail
				title="Beach"
				imageSource={require("../../assets/beach.jpg")}
			/>
			<ImageDetail
				title="Mountain"
				imageSource={require("../../assets/mountain.jpg")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageScreen;
