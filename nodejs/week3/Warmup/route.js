//Calculator
const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
router.use(bodyparser.json());

//Addition
router.post("/add", (req, res) => {
          const { firstNumber, secondNumber } = req.body;
          const addition = parseInt(firstNumber) + parseInt(secondNumber);
          res.send(`Addition=${addition}`);
});

//multiplication
router.post("/mul", (req, res) => {
          const { firstNumber, secondNumber } = req.body;
          const mul = parseInt(firstNumber) * parseInt(secondNumber);
          res.send(`multiplication=${mul}`);
});
//substraction
router.post("/sub", (req, res) => {
          const { firstNumber, secondNumber } = req.body;
          const sub = parseInt(firstNumber) - parseInt(secondNumber);
          res.send(`Subtraction=${sub}`);
});

//division
router.post("/div", (req, res) => {
          const { firstNumber, secondNumber } = req.body;
          const div = parseInt(firstNumber) / parseInt(secondNumber);
          res.send(`division=${div}`);
});
module.exports = router;
