const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");
const fs=require('fs');

router.post("/", async (req, res) => {
  try {
    const query = {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        telephone: req.body.telephone,
};
if(query)
{
    const qResponse = await knex("user").insert(query);

    if(qResponse)
    {
        res.redirect('/signin')
    }
}
     } catch (error) {
    throw error;
  }
});

router.get("/", async (req, res) => {
  try {
            const users = await knex.from("user").select("*");
            if (users.length == 0) {
                      res.status(404).send(
                                "Sorry data does not exists any more"
                      );
            }
            res.send(users);
  } catch (err) {
            throw err;
  }
});
module.exports = router;
