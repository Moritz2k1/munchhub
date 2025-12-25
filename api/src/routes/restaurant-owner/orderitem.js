const express = require("express");
const router = express.Router();
const OrderItem = require("../../models/restaurant-owner/OrderItem");
const sequelize = require("../../config/db");

router.post("/", async (req, res) => {
    try {
        const newOrderItem = await OrderItem.create(req.body);
        res.status(201).json(newOrderItem);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const OrderItems = await OrderItem.findAll();
        res.status(200).json(OrderItems);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const OrderItem = await OrderItem.findByPk(req.params.id);

        if (!OrderItem) {
            return res.status(404).json({ error: "OrderItem not found" });
        }

        res.status(200).json(OrderItem);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const OrderItem = await OrderItem.findByPk(req.params.id);

        if (!OrderItem) {
            return res.status(404).json({ error: "OrderItem not found" });
        }

        await OrderItem.update(req.body);
        res.status(200).json(OrderItem);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const OrderItem = await OrderItem.findByPk(req.params.id);
        if (!OrderItem) {
            return res.status(404).json({ error: "OrderItem not found" });
        }

        await OrderItem.destroy();

        const count = await OrderItem.count();

        if (count == 0) {
            await sequelize.query(
                'ALTER SEQUENCE "OrderItems_order_item_id_seq" RESTART WITH 1'
            );
        }

        res.status(200).json({ message: "OrderItem deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
