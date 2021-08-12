const express = require("express");
const route = express.Router();
const { db, Page, User } = require("../models/index");
const addPage = require("../views/addPage");
const slugify = require("slugify");
const wikiPage = require("../views/wikiPage");

route.get("/", async (req, res) => {
	let pages = await Page.findAll();
	res.send(pages);
});

route.post("/", async (req, res) => {
	const newPage = await Page.create({
		title: req.body.title,
		slug: slugify(req.body.title),
		content: req.body.content,
		status: req.body.status,
	});
	res.json(newPage);
});

route.get("/add", async (req, res) => {
	res.send(addPage());
});

route.get("/:slug", async (req, res, next) => {
	const foundPage = await Page.findOne({
		where: { slug: req.params.slug },
	});
	res.send(wikiPage(foundPage));
});

module.exports = route;
