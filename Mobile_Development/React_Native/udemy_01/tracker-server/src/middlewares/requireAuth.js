/* This middleware will pre-process the request and verify the JWT that
the client will pass with every request. */

const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const UserModel = mongoose.model("User");

/* next() is coming from the Express library:
The next function is a function in the Express router which, when invoked, executes
the middleware succeeding the current middleware. */
module.exports = (req, res, next) => {
	// check if the request header contains jwt
	const { authorization } = req.headers; // Authorization === 'Bearer __jwt____'
	if (!authorization)
		return res.status(401).send({ error: "You must be logged in." });
	const token = authorization.replace("Bearer", "").trim();

	// verify the token
	jwt.verify(token, "MY_SECRET_KEY", async (err, payload) => {
		// not verified
		if (err)
			return res.status(401).send({ error: "You must be logged in." });

		// verified
		const user = await UserModel.findById(payload.userId);
		/* add the user details in the request object because other middleware or handlers may need it */
		req.user = user;

		// run the next function
		next();
	});
};
