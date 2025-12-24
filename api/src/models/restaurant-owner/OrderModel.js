const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");

const Order = sequelize.define(
    "Dish",
    {
        // Primary Key
        order_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        // Foreign Key
        restaurant_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "restaurant",
                key: "restaurant_id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },

        // Foreign Key
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "customer",
                key: "customer_id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },

        order_status: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        order_total_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        order_created_at: {
            type: DataTypes.TIME,
            allowNull: false,
        },
    },
    {
        tableName: "Order",
        timestamps: true,
        underscored: true,
    }
);

module.exports = Order;
