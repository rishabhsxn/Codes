import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, routeName, linkText }) => {
	return (
		<View>
			<Spacer>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate(routeName);
					}}
				>
					<Text style={styles.link}>{linkText}</Text>
				</TouchableOpacity>
			</Spacer>
		</View>
	);
};

export default withNavigation(NavLink);

const styles = StyleSheet.create({
	link: {
		fontSize: 16,
		color: "blue",
	},
});
