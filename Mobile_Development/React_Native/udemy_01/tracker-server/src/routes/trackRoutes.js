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

module.exports = router;
