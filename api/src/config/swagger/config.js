require("dotenv").config();

module.exports = {
    openapi: "3.0.0",
    info: {
        title: "MunchHub API",
        version: "1.0.0",
        description: "API documentation for MunchHub using Swagger",
    },
    servers: [
        {
            url: `http://localhost:${process.env.PORT || 3000}`,
            description: "Development server",
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
            },
        },
        schemas: {
            Error: {
                type: "object",
                properties: {
                    error: {
                        type: "string",
                        description: "Error message",
                        example: "An error occurred",
                    },
                },
            },
        },
    },
};
