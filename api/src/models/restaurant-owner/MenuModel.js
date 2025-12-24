const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");

const Menu = sequelize.define(
    "Menu",
    {
        // Primary Key
        menu_id: {
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

        menu_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        menu_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        menu_start_time: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        menu_end_time: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "Menu",
        timestamps: true,
        underscored: true,
    }
);

module.exports = Menu;
