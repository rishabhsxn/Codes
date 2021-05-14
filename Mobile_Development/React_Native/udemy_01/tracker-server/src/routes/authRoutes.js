/* In this file we will write all the request handling logic related to deal wtih
anything related to Authentication like signing in, signing up etc  */

const express = require("express");

/*
Routing refers to determining how an application responds to a client request to a 
particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
Each route can have one or more handler functions, which are executed when the route is matched.

A router is an object that allows us to associate multiple handlers, we will then attach the router
to the main application object */
const router = express.Router();

// if a post call is made on /signup, run the callback
router.post("/signup", (req, res) => {
	console.log(req.body);
	res.send("You made a post request");
});

module.exports = router;
