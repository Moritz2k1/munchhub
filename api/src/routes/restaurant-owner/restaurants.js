const express = require("express");
const router = express.Router();
const Restaurant = require("../../models/restaurant-owner/RestaurantModel");

router.post("/", async (req, res) => {
    try {
        const newRestaurant = await Restaurant.create(req.body);
        res.status(201).json(newRestaurant);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const restaurants = await Restaurant.findAll();
        res.status(200).json(restaurants);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const restaurant = await Restaurant.findByPk(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ error: "Restaurant not found" });
        }
        res.status(200).json(restaurant);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const restaurant = await Restaurant.findByPk(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ error: "Restaurant not found" });
        }

        await restaurant.destroy();
        res.status(200).json({ message: "Restaurant deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
