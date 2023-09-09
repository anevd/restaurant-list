const express = require("express");
const router = express.Router();
const restaurants = require("../db/restaurants");

router.get("/", function (req, res) {
	res.send(JSON.stringify(restaurants));
});

router.delete("/:id", function (req, res) {
	const { id } = req.params;
	const index = restaurants.findIndex((el) => el.id === +id);
	restaurants.splice(index, 1);
	res.status(200).end();
});

module.exports = router;
