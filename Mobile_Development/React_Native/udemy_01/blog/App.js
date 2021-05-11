import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { BlogProvider } from "./src/context/BlogContext";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";

const navigator = createStackNavigator(
	{
		Index: IndexScreen,
		Show: ShowScreen,
	},
	{
		initialRouteName: "Index",
		defaultNavigationOptions: {
			title: "Blogs",
		},
	}
);

const App = createAppContainer(navigator);

export default () => {
	return (
		<BlogProvider>
			<App />
		</BlogProvider>
	);
};
