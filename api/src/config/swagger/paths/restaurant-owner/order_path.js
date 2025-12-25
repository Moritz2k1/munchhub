module.exports = {
    "api/orders": {
        post: {
            summary: "Create a new order",
            tags: ["Orders"],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Order",
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: "Order created successfully",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Order",
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
            summary: "Get all orders",
            tags: ["Orders"],
            responses: {
                200: {
                    description: "List of all orders",
                    content: {
                        "application/json": {
                            schema: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/Order",
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
    "api/orders/{id}": {
        get: {
            summary: "Get an order by ID",
            tags: ["Orders"],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                        type: "integer",
                    },
                    description: "Order ID",
                },
            ],
            responses: {
                200: {
                    description: "Order details",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Order",
                            },
                        },
                    },
                },
                404: {
                    description: "Order not found",
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
            summary: "Update an order by ID",
            tags: ["Orders"],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                        type: "integer",
                    },
                    description: "Order ID",
                },
            ],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Order",
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Order updated successfully",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Order",
                            },
                        },
                    },
                },
                404: {
                    description: "Order not found",
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
            summary: "Delete an order by ID",
            tags: ["Orders"],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                        type: "integer",
                    },
                    description: "Order ID",
                },
            ],
            responses: {
                200: {
                    description: "Order deleted successfully",
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
                    description: "Order not found",
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
