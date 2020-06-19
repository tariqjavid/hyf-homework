const express = require("express");
const app = express();
const reservations = require("./routes/reservation.js");
const reviews = require("./routes/review.js");
const meals = require("./routes/meal.js");
app.use("/", reviews);
app.use("/", meals);
app.use("/", reservations);
app.listen(3000, (req, res) => console.log("Server is running"));
