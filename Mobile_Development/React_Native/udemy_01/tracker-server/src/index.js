require("./models/User"); // special import. only import in index.js to avoid multiple calling of the code.
require("./models/Track");
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
const requireAuth = require("./middlewares/requireAuth");
/* By default, our express api doesn't understand JSON.
body-parser is a helper library that will automatically parse information associated
it the body property of an incoming request. */
// const bodyParser = require("body-parser");

const app = express();

app.use(
	express.json()
); /* should be before app.use(authRoutes). Now we can read the body property
in the req object in handlers */
app.use(authRoutes); // associate all the handlers (attached to the router) to the main express app
app.use(trackRoutes);

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

// first route - run the middleware requireAuth before entering this route
app.get("/", requireAuth, (req, res) => {
	// now the request object must have details of user from middleware
	res.send(`Your email is ${req.user.email}`);
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});
