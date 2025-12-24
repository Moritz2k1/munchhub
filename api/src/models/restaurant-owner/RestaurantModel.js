const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");

const Restaurant = sequelize.define(
    "Restaurant",
    {
        // Primary Key
        restaurant_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        // Foreign Key
        // owner_id: {
        //   type: DataTypes.INTEGER,
        //   allowNull: false,
        //   references: {
        //     model: "users",
        //     key: "user_id",
        //   },
        //   onUpdate: "CASCADE",
        //   onDelete: "CASCADE",
        // },

        restaurant_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        restaurant_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        restaurant_street: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        restaurant_house_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        restaurant_postal_code: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        restaurant_city: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        restaurant_opening_hour: {
            type: DataTypes.TIME,
            allowNull: false,
        },

        restaurant_closing_hour: {
            type: DataTypes.TIME,
            allowNull: false,
        },
    },
    {
        tableName: "Restaurants",
        timestamps: true,
        underscored: true,
    }
);

module.exports = Restaurant;
