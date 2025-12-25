const config = require("./config");

// Schemas
const restaurantSchema = require("./schemas/restaurant-owner/restaurant_schema");
const menuSchema = require("./schemas/restaurant-owner/menu_schema");
const dishSchema = require("./schemas/restaurant-owner/dish_schema");
const orderSchema = require("./schemas/restaurant-owner/order_schema");
const orderItemSchema = require("./schemas/restaurant-owner/orderitem_schema");

// Endpoints
const restaurantPath = require("./paths/restaurant-owner/restaurant_path");
const menuPath = require("./paths/restaurant-owner/menu_path");
const dishPath = require("./paths/restaurant-owner/dish_path");
const orderPath = require("./paths/restaurant-owner/order_path");
const orderItemPath = require("./paths/restaurant-owner/orderitem_path");

module.exports = {
    ...config,
    components: {
        ...config.components,
        schemas: {
            ...config.components.schemas,
            ...restaurantSchema,
            ...menuSchema,
            ...dishSchema,
            ...orderSchema,
            ...orderItemSchema,
        },
    },
    paths: {
        ...restaurantPath,
        ...menuPath,
        ...dishPath,
        ...orderPath,
        ...orderItemPath,
    },
};
