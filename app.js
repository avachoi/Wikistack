const morgan = require("morgan");
const express = require("express");
const app = express();
const layout = require("./views/layout");
const { db } = require("./models");

app.use(morgan("dev"));

// const expressStaticFiles = express.static(path.join(__dirname, 'public'))
// app.use(expressStaticFiles);

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));
//this route will catch all requests, and add req.body to each request; - anonymous

app.get("/", (req, res) => {
	res.send(layout(""));
});

db.authenticate().then(() => {
	console.log("connected to the database");
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`user listening ${PORT}`);
});
