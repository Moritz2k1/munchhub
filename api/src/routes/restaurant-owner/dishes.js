const express = require("express");
const router = express.Router();
const Dish = require("../../models/restaurant-owner/DishModel");
const sequelize = require("../../config/db");

router.post("/", async (req, res) => {
    try {
        const newDish = await Dish.create(req.body);
        res.status(201).json(newDish);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const Dishs = await Dish.findAll();
        res.status(200).json(Dishs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const Dish = await Dish.findByPk(req.params.id);

        if (!Dish) {
            return res.status(404).json({ error: "Dish not found" });
        }

        res.status(200).json(Dish);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const Dish = await Dish.findByPk(req.params.id);

        if (!Dish) {
            return res.status(404).json({ error: "Dish not found" });
        }

        await Dish.update(req.body);
        res.status(200).json(Dish);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const Dish = await Dish.findByPk(req.params.id);
        if (!Dish) {
            return res.status(404).json({ error: "Dish not found" });
        }

        await Dish.destroy();

        const count = await Dish.count();

        if (count == 0) {
            await sequelize.query(
                'ALTER SEQUENCE "Dishes_dish_id_seq" RESTART WITH 1'
            );
        }

        res.status(200).json({ message: "Dish deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
