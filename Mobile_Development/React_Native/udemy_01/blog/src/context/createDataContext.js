/* We are creating a function that will generate custom Context and Provider for different resources(articles, comments
altogether a different piece of data) so that we don't have to write same code again and again. */
import React, { useReducer } from "react";

/* Here we will pass all the arguments that will be different for different contexts 
reducer will be different for different resources
actions is an object that contain all the callbacks that will dispatch an action object 
initial state will be different for different resources */
export default (reducer, actions, initialState) => {
	const Context = React.createContext();

	const Provider = ({ children }) => {
		const [state, dispatch] = useReducer(reducer, initialState);

		return <Context.Provider value={state}>{children}</Context.Provider>;
	};

	return { Context, Provider };
};
