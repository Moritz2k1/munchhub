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
 *           type: integer
 *         restaurant_closing_hour:
 *           type: integer
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

router.post("/restaurants", async (req, res) => {
  try {
    const newRestaurant = await Restaurant.create(req.body);
    res.status(201).json(newRestaurant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
