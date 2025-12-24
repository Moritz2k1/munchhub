module.exports = {
    "/api/restaurants": {
        post: {
            summary: "Create a new restaurant",
            tags: ["Restaurants"],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Restaurant",
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: "Restaurant created successfully",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Restaurant",
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
            summary: "Get all restaurants",
            tags: ["Restaurants"],
            responses: {
                200: {
                    description: "List of all restaurants",
                    content: {
                        "application/json": {
                            schema: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/Restaurant",
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
    "/api/restaurants/{id}": {
        get: {
            summary: "Get a restaurant by ID",
            tags: ["Restaurants"],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                        type: "integer",
                    },
                    description: "Restaurant ID",
                },
            ],
            responses: {
                200: {
                    description: "Restaurant details",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Restaurant",
                            },
                        },
                    },
                },
                404: {
                    description: "Restaurant not found",
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
            summary: "Delete a restaurant by ID",
            tags: ["Restaurants"],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                        type: "integer",
                    },
                    description: "Restaurant ID",
                },
            ],
            responses: {
                200: {
                    description: "Restaurant deleted successfully",
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
                    description: "Restaurant not found",
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
