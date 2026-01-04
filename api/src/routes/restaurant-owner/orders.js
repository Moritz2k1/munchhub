const express = require("express");
const router = express.Router();
const Order = require("../../models/restaurant-owner/OrderModel");
const sequelize = require("../../config/db");

router.post("/", async (req, res) => {
    try {
        const newOrder = await Order.create(req.body);
        res.status(201).json(newOrder);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json(orders);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);

        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }

        res.status(200).json(order);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);

        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }

        await order.update(req.body);
        res.status(200).json(order);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }

        await order.destroy();

        const count = await order.count();

        if (count == 0) {
            await sequelize.query(
                'ALTER SEQUENCE "Orders_order_id_seq" RESTART WITH 1'
            );
        }

        res.status(200).json({ message: "Order deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
