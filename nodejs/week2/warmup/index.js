const express = require("express");
const app = express();

//Addition
app.get("/number/add/", (req, res) => {
          const { first, second } = req.query;
          const num1 = parseInt(first);
          const num2 = parseInt(second);

          if (num1 && num2) {
                    const sum = num1 + num2;
                    res.send(`Sum of two numbers=${sum}`);
          } else {
                    res.send("Please enter correct query");
          }
}); //write => localhost:3000/number/add/5/3

//Multiplication
app.get("/number/mul", (req, res) => {
          const { first, second } = req.query;
          const num1 = parseInt(first);
          const num2 = parseInt(second);
          if (num1 && num2) {
                    const mul = num1 * num2;
                    res.send(`Multiplication of two numbers=${mul}`);
          } else {
                    res.send("Please enter correct query");
          }
});
//write=>localhost:3000/number/mul?first=5&second=3
app.listen(3000, (req, res) => console.log("Server is running"));
