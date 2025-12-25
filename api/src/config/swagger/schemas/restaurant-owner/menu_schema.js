module.exports = {
    Menu: {
        type: "object",
        properties: {
            menu_name: {
                type: "string",
            },
            menu_description: {
                type: "string",
            },
            menu_start_time: {
                type: "string",
                format: "time",
            },
            menu_end_time: {
                type: "string",
                format: "time",
            },
        },
    },
};
