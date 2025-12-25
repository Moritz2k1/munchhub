module.exports = {
    "api/orderitems": {
        post: {
            summary: "Create a new order item",
            tags: ["OrderItem"],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/OrderItem",
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: "Order item created successfully",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/OrderItem",
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
            summary: "Get all order items",
            tags: ["OrderItem"],
            responses: {
                200: {
                    description: "List of all order items",
                    content: {
                        "application/json": {
                            schema: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/OrderItem",
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
            tags: ["OrderItem"],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                        type: "integer",
                    },
                    description: "Order item ID",
                },
            ],
            responses: {
                200: {
                    description: "Order item details",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/OrderItem",
                            },
                        },
                    },
                },
                404: {
                    description: "Order item not found",
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
            summary: "Update an order item by ID",
            tags: ["Orders"],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                        type: "integer",
                    },
                    description: "Order item ID",
                },
            ],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/OrderItem",
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Order item updated successfully",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/OrderItem",
                            },
                        },
                    },
                },
                404: {
                    description: "Order item not found",
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
            summary: "Delete an order item by ID",
            tags: ["OrderItem"],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                        type: "integer",
                    },
                    description: "Order item ID",
                },
            ],
            responses: {
                200: {
                    description: "Order item deleted successfully",
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
                    description: "Order item not found",
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
