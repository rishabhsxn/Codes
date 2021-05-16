const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// create a schema
const userSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

// create function that will automatically run when we save user and convert password string using salting and hashing
// pre-save hook
userSchema.pre("save", function (next) {
	const user = this;

	// if the password is not changed, then don't do anything
	if (!user.isModified("password")) {
		return next();
	}

	// if password is newly added or updated, then convert
	bcrypt.genSalt(10, (err, salt) => {
		if (err) return next(err);

		bcrypt.hash(user.password, salt, (err, hash) => {
			if (err) return next(err);

			// replace user password with hashed value
			user.password = hash;
			next();
		});
	});
});

// create a method to compare if user entered the correct password during signin
userSchema.methods.comparePassword = function (enteredPassword) {
	const user = this;

	// creating a promise so that we can use the async await syntax
	return new Promise((resolve, reject) => {
		bcrypt.compare(enteredPassword, user.password, (err, isMatch) => {
			if (err) reject(err);

			if (!isMatch) reject(false);

			resolve(true);
		});
	});
};

// create a model using the schema
mongoose.model("User", userSchema);
