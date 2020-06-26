const mealsRouter = require("./api/meals");
const reviewsRouter = require("./api/reviews");
const reservationsRouter = require("./api/reservations");
const express = require("express");
const app = express();
app.use("/api", mealsRouter);
app.use("/api", reviewsRouter);
app.use("/api", reservationsRouter);
app.get("*", (req, res) => {
          res.send("please write correct URL");
});

app.listen(3000, () => console.log("Server is running"));
