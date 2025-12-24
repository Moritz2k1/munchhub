const express = require("express");
const router = express.Router();
const Restaurant = require("../../models/restaurant-owner/RestaurantModel");

/**
 * @swagger
 * components:
 *   schemas:
 *     Restaurant:
 *       type: object
 *       properties:
 *         restaurant_name:
 *           type: string
 *         restaurant_type:
 *           type: string
 *         restaurant_street:
 *           type: string
 *         restaurant_house_number:
 *           type: string
 *         restaurant_postal_code:
 *           type: string
 *         restaurant_city:
 *           type: string
 *         restaurant_opening_hour:
 *           type: string
 *           format: time
 *         restaurant_closing_hour:
 *           type: string
 *           format: time
 */

/**
 * @swagger
 * tags:
 *   name: Restaurants
 *   description: Restaurant management
 */

/**
 * @swagger
 * /api/restaurants:
 *   post:
 *     summary: Create a new restaurant
 *     tags: [Restaurants]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Restaurant'
 *     responses:
 *       201:
 *         description: Restaurant created successfully
 *       500:
 *         description: Server error
 */

router.post("/", async (req, res) => {
    try {
        const newRestaurant = await Restaurant.create(req.body);
        res.status(201).json(newRestaurant);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

/**
 * @swagger
 * /api/restaurants:
 *  get:
 *    summary: Get all restaurants
 *    tags: [Restaurants]
 *    responses:
 *       201:
 *         description: List of all restaurants
 *         content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Restaurant'
 *       500:
 *         description: Server error
 */

router.get("/", async (req, res) => {
    try {
        const restaurants = await Restaurant.findAll();
        res.status(200).json(restaurants);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
