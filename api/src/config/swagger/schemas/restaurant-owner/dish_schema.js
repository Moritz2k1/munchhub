module.exports = {
    Dish: {
        type: "object",
        properties: {
            dish_name: {
                type: "string",
            },
            dish_description: {
                type: "string",
            },
            dish_picture: {
                type: "string",
            },
            dish_category: {
                type: "string",
            },
            dish_price: {
                type: "integer",
            },
        },
    },
};
