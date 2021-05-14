const express = require("express");

const app = express();

// first route
app.get("/", (req, res) => {
	res.send("Hi there!");
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});
