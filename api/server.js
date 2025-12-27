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
const restaurantRoute = require("./src/routes/restaurant-owner/restaurants");
const menuRoute = require("./src/routes/restaurant-owner/menus");
const dishRoute = require("./src/routes/restaurant-owner/dishes");
const orderRoute = require("./src/routes/restaurant-owner/orders");
const orderItemRoute = require("./src/routes/restaurant-owner/orderitem");
// Site Manager
const userRoute = require("./src/routes/site-manager/users");

app.use(cors());
app.use(express.json());

// Swagger Route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Use Routes here
// Client
// Restaurant Owner
app.use("/api/restaurants", restaurantRoute);
app.use("/api/menus", menuRoute);
app.use("/api/dishes", dishRoute);
app.use("/api/orders", orderRoute);
app.use("/api/orderitems", orderItemRoute);
// Site Manager
app.use("/api/users", userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger Docs available on: http://localhost:${PORT}/api-docs`);
});
