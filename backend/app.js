const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middleware/error");

app.use(express.json())
app.use(cookieParser());
// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

app.use("/app/v1",product);
app.use("/app/v1", user);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app; 