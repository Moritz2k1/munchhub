const express = require("express");
const app = express();

const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./src/config/swagger");

// Define Routes here
const restaurantRoutes = require("./src/routes/restaurant-owner/restaurants");

app.use(cors());
app.use(express.json());

// Swagger Route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Use Routes here
app.use("/api/restaurants", restaurantRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger Docs available on: http://localhost:${PORT}/api-docs`);
});
