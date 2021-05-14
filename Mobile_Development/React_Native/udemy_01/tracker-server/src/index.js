const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongoUri =
	"mongodb+srv://admin:passwordvar@cluster0.2tte6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// connect to mongodb
mongoose.connect(mongoUri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});
// connection listeners
mongoose.connection.on("connected", () => {
	console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
	console.log("Error connecting to mongo:", err);
});

// first route
app.get("/", (req, res) => {
	res.send("Hi there!");
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});
