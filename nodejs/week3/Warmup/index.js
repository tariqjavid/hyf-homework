const express = require("express");

const app = express();
const calculator = require("./route");
const router = require("./route");
app.use("/calculator", calculator);
app.listen(3000, () => console.log("Server is running"));
