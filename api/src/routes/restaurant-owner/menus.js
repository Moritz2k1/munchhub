const express = require("express");
const router = express.Router();
const Menu = require("../../models/restaurant-owner/MenuModel");
const sequelize = require("../../config/db");

router.post("/", async (req, res) => {
    try {
        const newMenu = await Menu.create(req.body);
        res.status(201).json(newMenu);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const menus = await Menu.findAll();
        res.status(200).json(menus);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const menu = await Menu.findByPk(req.params.id);

        if (!menu) {
            return res.status(404).json({ error: "Menu not found" });
        }

        res.status(200).json(menu);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const menu = await Menu.findByPk(req.params.id);

        if (!menu) {
            return res.status(404).json({ error: "Menu not found" });
        }

        await menu.update(req.body);
        res.status(200).json(menu);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const menu = await Menu.findByPk(req.params.id);
        if (!menu) {
            return res.status(404).json({ error: "Menu not found" });
        }

        await menu.destroy();

        const count = await menu.count();

        if (count == 0) {
            await sequelize.query(
                'ALTER SEQUENCE "menus_menu_id_seq" RESTART WITH 1'
            );
        }

        res.status(200).json({ message: "Menu deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
