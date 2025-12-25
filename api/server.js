const express = require("express");
const app = express();

const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./src/config/swagger/swagger");

// Define Routes here
// Client
// Restaurant Owner
const restaurantRoutes = require("./src/routes/restaurant-owner/restaurants");
const menuRoutes = require("./src/routes/restaurant-owner/menus");
const dishRoutes = require("./src/routes/restaurant-owner/dishes");
const orderRoutes = require("./src/routes/restaurant-owner/orders");
const orderItemRoutes = require("./src/routes/restaurant-owner/orderitem");
// Site Manager

app.use(cors());
app.use(express.json());

// Swagger Route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Use Routes here
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/menus", restaurantRoutes);
app.use("/api/dishes", restaurantRoutes);
app.use("/api/orders", restaurantRoutes);
app.use("/api/orderitems", restaurantRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger Docs available on: http://localhost:${PORT}/api-docs`);
});
