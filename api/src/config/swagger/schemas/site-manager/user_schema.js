module.exports = {
    User: {
        type: "object",
        properties: {
            user_email: {
                type: "string",
            },
            user_password: {
                type: "string",
            },
            user_first_name: {
                type: "string",
            },
            user_last_name: {
                type: "string",
            },
            user_street: {
                type: "string",
            },
            user_house_number: {
                type: "string",
            },
            user_city: {
                type: "string",
            },
            user_postal_code: {
                type: "string",
            },
            user_is_owner: {
                type: "boolean",
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
