const morgan = require("morgan");
const express = require("express");
const app = express();
const layout = require("./views/layout");
const { db, Page, User } = require("./models/index");
const wikiRoutes = require('./routes/wiki');
const userRoutes = require('./routes/user');
app.use(morgan("dev"));

// const expressStaticFiles = express.static(path.join(__dirname, 'public'))
// app.use(expressStaticFiles);

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));
//this route will catch all requests, and add req.body to each request; - anonymous

// console.log(wikiRoutes());
app.use('/wiki', wikiRoutes)


app.get("/", (req, res) => {
	res.redirect('/wiki');
});

db.authenticate().then(() => {
	console.log("connected to the database");
});

const PORT = 3000;

const init = async () => {
  await db.sync();
  app.listen(PORT, () => {
    console.log(`Server is listning on port ${PORT}!`)
  })
}

init();
