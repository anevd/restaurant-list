const express = require("express");
const router = express.Router();
const restaurants = require("../db/restaurants");

router.put("/", function (req, res) {
	const restaurant = req.body;
	restaurants.map((el) => {
		if (el.id === restaurant.id) {
			if (!restaurant.image.match(/\.(jpg|jpeg|png|gif)$/)) {
				restaurant.image = "https://gas-kvas.com/uploads/posts/2023-02/1676439541_gas-kvas-com-p-risunok-detskoe-kafe-6.jpg";
			} else {
				el.image = restaurant.image;
			}
			el.name = restaurant.name;
			el.location = restaurant.location;
			el.description = restaurant.description;
			el.rating = restaurant.rating;
		}
	});
	res.status(200).end();
});

module.exports = router;
