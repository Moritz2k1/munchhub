module.exports = {
    Restaurant: {
        type: "object",
        properties: {
            restaurant_name: {
                type: "string",
            },
            restaurant_type: {
                type: "string",
            },
            restaurant_street: {
                type: "string",
            },
            restaurant_house_number: {
                type: "string",
            },
            restaurant_postal_code: {
                type: "string",
            },
            restaurant_city: {
                type: "string",
            },
            restaurant_opening_hour: {
                type: "string",
                format: "time",
            },
            restaurant_closing_hour: {
                type: "string",
                format: "time",
            },
            created_at: {
                type: "string",
                format: "date-time",
            },
            updated_at: {
                type: "string",
                format: "date-time",
            },
        },
    },
};
