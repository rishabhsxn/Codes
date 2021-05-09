import axios from "axios";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization:
			"Bearer BLwsOxS9h7Nn2xiu-ts0ZIUxh5xRK98Rl9DdMqxaZhSg58IZ1ohuBtWJeV5sQtKZUL3sXF4xTca6NnXr5ws_Uq4qtq0x7kErSfYAPUZlXkVryiNav_lGN_LFBjeYYHYx",
	},
});
