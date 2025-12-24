const config = require("./config");

// Schemas
const restaurantSchema = require("./schemas/restaurant-owner/restaurant_schema");

// Endpoints
const restaurantPath = require("./paths/restaurant-owner/restaurant_path");

module.exports = {
    ...config,
    components: {
        ...config.components,
        schemas: {
            ...config.components.schemas,
            ...restaurantSchema,
        },
    },
    paths: {
        ...restaurantPath,
    },
    tags: [
        {
            name: "Restaurants",
            description: "Restaurant endpoints",
        },
    ],
};
