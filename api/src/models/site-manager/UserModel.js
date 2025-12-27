const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");

const User = sequelize.define(
    "User",
    {
        // Primary Key
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        user_email: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        user_password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        user_first_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        user_last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        user_street: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        user_house_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        user_city: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        user_postal_code: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        user_is_owner: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        tableName: "Users",
        timestamps: true,
        underscored: true,
    }
);

module.exports = User;
