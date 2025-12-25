module.exports = {
    "api/dishes": {
        post: {
            summary: "Create a new dish",
            tags: ["Dishes"],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Dish",
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: "Dish created successfully",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Dish",
                            },
                        },
                    },
                },
                500: {
                    description: "Server error",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Error",
                            },
                        },
                    },
                },
            },
        },
        get: {
            summary: "Get all dishes",
            tags: ["Dishes"],
            responses: {
                200: {
                    description: "List of all dishes",
                    content: {
                        "application/json": {
                            schema: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/Dish",
                                },
                            },
                        },
                    },
                },
                500: {
                    description: "Server error",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Error",
                            },
                        },
                    },
                },
            },
        },
    },
    "api/dishes/{id}": {
        get: {
            summary: "Get a dish by ID",
            tags: ["Dishes"],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                        type: "integer",
                    },
                    description: "Dish ID",
                },
            ],
            responses: {
                200: {
                    description: "Dish details",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Dish",
                            },
                        },
                    },
                },
                404: {
                    description: "Dish not found",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Error",
                            },
                        },
                    },
                },
                500: {
                    description: "Server error",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Error",
                            },
                        },
                    },
                },
            },
        },
        patch: {
            summary: "Update a dish by ID",
            tags: ["Dishes"],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                        type: "integer",
                    },
                    description: "Dish ID",
                },
            ],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Dish",
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Dish updated successfully",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Dish",
                            },
                        },
                    },
                },
                404: {
                    description: "Dish not found",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Error",
                            },
                        },
                    },
                },
                500: {
                    description: "Server error",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Error",
                            },
                        },
                    },
                },
            },
        },
        delete: {
            summary: "Delete a dish by ID",
            tags: ["Dishes"],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                        type: "integer",
                    },
                    description: "Dish ID",
                },
            ],
            responses: {
                200: {
                    description: "Dish deleted successfully",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                    },
                                },
                            },
                        },
                    },
                },
                404: {
                    description: "Dish not found",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Error",
                            },
                        },
                    },
                },
                500: {
                    description: "Server error",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Error",
                            },
                        },
                    },
                },
            },
        },
    },
};
