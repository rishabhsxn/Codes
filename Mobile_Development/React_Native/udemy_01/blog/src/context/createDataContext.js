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

		/* actions is an object that contain different callbacks that we need to pass to the child components that
        allow them to modify state. 
        But these callback didn't have dispatch, so need to generate new callbacks that have access to dispatch without
        the need of parameters (because child won't have the dispatch function to pass as parameter. */
		const processedActions = {}; // this object will contain the new callbacks
		for (let key in actions) {
			processedActions[key] = actions[key](dispatch);
		}

		// now pass these callbacks in the value prop along side state
		return (
			<Context.Provider value={{ state, ...processedActions }}>
				{children}
			</Context.Provider>
		);
	};

	return { Context, Provider };
};
