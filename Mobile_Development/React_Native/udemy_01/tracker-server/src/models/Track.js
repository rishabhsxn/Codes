const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
	timestamp: Number,
	coords: {
		latitude: Number,
		longitude: Number,
		altitude: Number,
		accuracy: Number,
		heading: Number,
		speed: Number,
	},
});

const trackSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	name: {
		type: String,
		default: "",
	},
	locations: [pointSchema],
});

// we dont have to embed pointSchema because we will not store it directly in mongoDb
mongoose.model("Track", trackSchema);
