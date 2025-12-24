const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");

const OrderItem = sequelize.define(
    "OrderItem",
    {
        //Primary Key
        order_item: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        // Foreign Key
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Orders",
                key: "order_id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },

        // Foreign Key
        dish_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Dishes",
                key: "dish_id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },

        order_item_quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        order_item_subtotal: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
    },
    {
        tableName: "OrderItems",
        timestamps: true,
        underscored: true,
    }
);

module.exports = OrderItem;
