const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");

const Order = sequelize.define(
    "Order",
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
                model: "Restaurants",
                key: "restaurant_id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },

        // Foreign Key
        // customer_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: "customer",
        //         key: "customer_id",
        //     },
        //     onUpdate: "CASCADE",
        //     onDelete: "CASCADE",
        // },

        order_status: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        order_total_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },

        order_created_at: {
            type: DataTypes.TIME,
            allowNull: false,
        },
    },
    {
        tableName: "Orders",
        timestamps: true,
        underscored: true,
    }
);

module.exports = Order;
