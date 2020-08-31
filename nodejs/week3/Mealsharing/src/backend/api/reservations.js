const knex = require("../database");
const express = require("express");
const router = express.Router();
//get method use to get all reservations follow up the meals.
router.get("/reservations", async (req, res) => {
          try {
                    const allReservations = await knex("reservation")
                              .select("*")
                              .join(
                                        "meal",
                                        "reservation.reservation_id",
                                        "=",
                                        "meal.meal_id"
                              );
                    if (allReservations.length == 0) {
                              res.send("Sorry data does not exists any more");
                    }

                    res.send(allReservations);
          } catch (err) {
                    throw err;
          }
});

// get the reservations with id
router.get("/reservations/:id", async (req, res) => {
          try {
                    const reservationId = req.params.id;
                    const reservationsWithId = await knex
                              .from("reservation")
                              .select("*")
                              .where({ reservation_id: reservationId });
                    if (reservationsWithId.length == 0) {
                              res.status(404).send(
                                        "Sorry data does not exists"
                              );
                    }
                    res.send(reservationsWithId);
          } catch (err) {
                    throw err;
          }
});
// post method  to add  new reservation

router.post("/reservations", (req, res) => {
          const query = {
                    meal_id: req.query.mealId,
                    created: req.query.createdDate,
                    user_id: req.query.userId,
          };

          if (query) {
                    const qResponse = knex("reservation").insert(query);
                    if (qResponse) {
                              res.status(404).send("data added");
                    }
          }
});
//delete mothod
router.delete("/reservations/:id", async (req, res) => {
          const reservationsId = { reservation_id: req.params.id };

          if (reservationsId) {
                    const qResponse = await knex("reservation")
                              .where(reservationsId)
                              .del();
                    if (qResponse) {
                              res.status(404).send("Record deleted");
                    }
          }

          res.status(404).send("Please enter Id to delete record");
});

// update reservations
router.put("/reservations", async (req, res) => {
          const query = {
                    meal_id: req.query.mealId,
                    created: req.query.createdDate,
                    user_id: req.query.userId,
          };

          if (query) {
                    const qResponse = await knex("reservation")
                              .where({
                                        reservation_id: req.query.reservationId,
                              })
                              .update(query);
                    if (qResponse) {
                              res.status(404).send("data updated");
                    }
          }
});
module.exports = router;
