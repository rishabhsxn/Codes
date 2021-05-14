const mongoose = require("mongoose");

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

// create a model using the schema
mongoose.model("User", userSchema);
