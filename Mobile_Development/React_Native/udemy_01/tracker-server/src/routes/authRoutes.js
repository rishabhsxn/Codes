/* In this file we will write all the request handling logic related to deal wtih
anything related to Authentication like signing in, signing up etc  */

const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

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

	try {
		const { email, password } = req.body;
		const user = new User({ email, password });
		await user.save();

		// after storing the user details, create jwt from it's ID & send the jwt token to client
		const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
		res.send({ token });
	} catch (err) {
		return res.status(422).send(err.message);
	}
});

router.post("/signin", async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password)
		return res.status(422).send({ error: "Must provide email & password" });

	const user = await User.findOne({ email });
	if (!user) return res.status(404).send({ error: "User not found" });

	// if password doesn't match, then the promise will be rejected
	try {
		await user.comparePassword(password);
		// when passwords are matched, send the jwt so that the client can save it
		const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
		res.send({ token });
	} catch (err) {
		return res.status(422).send({ error: "Invalid email or password" });
	}
});

module.exports = router;
