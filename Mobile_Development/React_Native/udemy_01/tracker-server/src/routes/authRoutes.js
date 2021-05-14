/* In this file we will write all the request handling logic related to deal wtih
anything related to Authentication like signing in, signing up etc  */

const express = require("express");
const mongoose = require("mongoose");

// to access an already defined model (DON'T IMPORT)
const User = mongoose.model("User");
// using this model, we can access the underlying User Collection in MongoDb

/*
Routing refers to determining how an application responds to a client request to a 
particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
Each route can have one or more handler functions, which are executed when the route is matched.

A router is an object that allows us to associate multiple handlers, we will then attach the router
to the main application object */
const router = express.Router();

// if a post call is made on /signup, run the callback
router.post("/signup", async (req, res) => {
	// create user instance and save in mongodb
	const { email, password } = req.body;
	const user = new User({ email, password });
	await user.save();

	res.send("You made a post request");
});

module.exports = router;
