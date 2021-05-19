// Tool for monitoring AsyncStorage, console.logs etc
if (__DEV__)
	import("./tools/ReactotronConfig").then(() =>
		console.log("Reactotron Configured")
	);

import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailsScreen from "./src/screens/TrackDetailsScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import AccountScreen from "./src/screens/AccountScreen";
import AuthResolveScreen from "./src/screens/AuthResolveScreen";

import { AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";

// AuthResolveScreen will open 1st when app is loaded
const navigator = createSwitchNavigator({
	AuthResolveScreen,
	loginFlow: createStackNavigator({
		Signup: SignupScreen,
		Signin: SigninScreen,
	}),
	mainFlow: createBottomTabNavigator({
		trackListFlow: createStackNavigator({
			TrackList: TrackListScreen,
			TrackDetail: TrackDetailsScreen,
		}),
		TrackCreate: TrackCreateScreen,
		Account: AccountScreen,
	}),
});

const App = createAppContainer(navigator);

export default () => {
	return (
		<AuthProvider>
			<App
				ref={(navigator) => {
					setNavigator(navigator);
				}}
			/>
		</AuthProvider>
	);
};
