module.exports = {
    Order: {
        type: "object",
        properties: {
            order_status: {
                type: "string",
            },
            order_total_price: {
                type: "integer",
            },
            order_created_at: {
                type: "string",
                format: "time",
            },
        },
    },
};
