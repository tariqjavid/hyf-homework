const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

router.get("/", async (req, res) => {
  try {
            const allReservations = await knex("meal")
                      .select("*")
                      .innerJoin(
                                "reservation",
                                "reservation.meal_id",
                                "=",
                                "meal.id"
                      );
            if (allReservations.length == 0) {
                      res.send("Sorry data does not exists any more");
            }

            res.send(allReservations);
  } catch (err) {
            throw err;
  }
});

router.post("/", async(req, res) => {
    try {
      const query = {
        meal_id: req.body.meal_id,
        user_id: req.body.user_id,
        created_date: req.body.reservation_date,
        number_of_guests: req.body.guest
      };
      if(query)
      {


        const qResponse = await knex("reservation").insert(query);

    if(qResponse)
    {
        res.redirect('/thanks')
    }
      }
      
    
    } catch (error) {
      throw error;
    }
  });
  
module.exports = router;