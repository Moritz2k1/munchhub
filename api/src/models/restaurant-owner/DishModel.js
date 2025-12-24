const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");

const Dish = sequelize.define(
    "Dish",
    {
        // Primary Key
        dish_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        // Foreign Key
        menu_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Menus",
                key: "menu_id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },

        dish_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        dish_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        dish_picture: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        dish_category: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        dish_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
    },
    {
        tableName: "Dishes",
        timestamps: true,
        underscored: true,
    }
);

module.exports = Dish;
