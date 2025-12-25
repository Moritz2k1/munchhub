module.exports = {
    "api/menus": {
        post: {
            summary: "Create a new menu",
            tags: ["Menus"],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Menu",
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: "Menu created successfully",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Menu",
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
            summary: "Get all menus",
            tags: ["Menus"],
            responses: {
                200: {
                    description: "List of all menus",
                    content: {
                        "application/json": {
                            schema: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/Menu",
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
    "api/menus/{id}": {
        get: {
            summary: "Get a menu by ID",
            tags: ["Menus"],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                        type: "integer",
                    },
                    description: "Menu ID",
                },
            ],
            responses: {
                200: {
                    description: "Menu details",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Menu",
                            },
                        },
                    },
                },
                404: {
                    description: "Menu not found",
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
            summary: "Update a menu by ID",
            tags: ["Menus"],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                        type: "integer",
                    },
                    description: "Menu ID",
                },
            ],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Menu",
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Menu updated successfully",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Menu",
                            },
                        },
                    },
                },
                404: {
                    description: "Menu not found",
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
            summary: "Delete a menu by ID",
            tags: ["Menus"],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                        type: "integer",
                    },
                    description: "Menu ID",
                },
            ],
            responses: {
                200: {
                    description: "Menu deleted successfully",
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
                    description: "Menu not found",
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
