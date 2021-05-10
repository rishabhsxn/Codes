import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	const searchAPI = async (searchTerm) => {
		try {
			const response = await yelp.get("/search", {
				// These params will be added in the link as arguments
				params: {
					term: searchTerm,
					limit: 50,
					location: "san jose",
				},
			});

			setResults(response.data.businesses);
		} catch (err) {
			setErrorMessage("Something went wrong.");
		}
	};

	// this will run the callback only after the 1st render
	useEffect(() => {
		searchAPI("macaroni");
	}, []);

	return [searchAPI, results, errorMessage];
};

/* Steps to separate hooks logic from component:

1. Cut all the code except the JSX that is related to business logic (in this case yelp api) and 
move to a separate file.

2. Find the variables and functions that are now needed in the JSX and return them in an array from the 
separated hooks code.  */
