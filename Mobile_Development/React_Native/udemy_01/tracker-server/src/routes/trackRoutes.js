const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Track = mongoose.model("Track");

const router = express.Router();
/* We want that the user should be logged in to access track routes, so
we will use the requireAuth function */
router.use(requireAuth);

router.get("/tracks", async (req, res) => {
	// find all tracks related to an user id
	const tracks = await Track.find({ userId: req.user._id }); // array

	res.send(tracks);
});

// route to add new tracks
router.post("/tracks", async (req, res) => {
	const { name, locations } = req.body;

	if (!name || !locations)
		return res
			.status(422)
			.send({ error: "You must provide a name and locations" });

	// Saving the track may cause error if user has provided data which doesn't match the schema
	try {
		// create an instance of Track
		const track = new Track({ name, locations, userId: req.user._id });
		// save the track
		await track.save();
		// send the created track in response for now
		res.send(track);
	} catch (err) {
		res.status(422).send({ error: err.message });
	}
});

module.exports = router;
