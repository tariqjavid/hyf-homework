const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

router.get("/", async (req, res) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meal").select("*");
    res.json(titles);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (req, res) => {
  try {
    const query = {
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      price: req.body.price,
      max_reservations:req.body.max_reservations
};
if (query) {
  const qResponse = await knex("meal").insert(query);
  if (qResponse) {
      res.status(404).redirect("/thanks");
  }
}
    // knex syntax for selecting things. Look up the documentation for knex for further info
   res.send(query)
  } catch (error) {
    throw error;
  }
});

module.exports = router;
