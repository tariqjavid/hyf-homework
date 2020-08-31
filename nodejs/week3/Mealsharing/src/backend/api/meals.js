const knex = require("../database");
const express = require("express");
const router = express.Router();
//get method
router.get("/", async (req, res) => {
          try {
                    const allMeals = await knex.from("meal").select("*");
                    if (allMeals.length == 0) {
                              res.send(
                                        "Sorry data does not exists any more"
                              );
                    }
                    res.send(allMeals);
          } catch (err) {
                    throw err;
          }
});
//get method using id
router.get("/:id", async (req, res) => {
          try {
              
                    const mealId = req.params.id;
                      
                     if(Number.isInteger(mealId))
                     {
                    const mealWithId = await knex
                              .from("meal")
                              .select("*")
                              .where({ meal_id: mealId });
                    if (mealWithId.length == 0) {
                              res.send(
                                        "Sorry data does not exists"
                              );
                    }
                }
                    res.send(mealWithId);
          } catch (err) {
                    throw err.status(404);
          }
});
//post method
router.post("/", async (req, res) => {
          const query = {
                    title: req.query.title,
                    description: req.query.description,
                    location: req.query.location,
                    price: req.query.price,
          };
          
          if (query) {
          if(Number.isInteger(price))
          {

                    const qResponse = await knex("meal").insert(query);
                    if (qResponse) {
                              res.send("data added");
                   }         }
          }
});

//put method
router.put("/", async (req, res) => {
          const query = {
                    title: req.query.title,
                    description: req.query.description,
                    location: req.query.location,
                    price: req.query.price,
          };
          if (query) {
                    const qResponse = await knex("meal")
                              .where({ meal_id: req.query.id })
                              .update(query);
                    if (qResponse) {
                              res.send("data updated");
                    }
                    else{
                        res.send('record does not find')
                    }
          }
});

//Delete method
router.delete("/:id", async (req, res) => {
          const mealsId = { meal_id: req.params.id };
          if (mealsId) {
                    const qResponse = await knex("meal").where(mealsId).del();
                    if (qResponse) {
                              res.send("Record deleted");
                    }
          }

          res.send("Please enter Id to delete record");
});

// update meals using put method
/*router.put("/meals", async (req, res) => {
          const query = {
                    title: req.query.title,
                    description: req.query.description,
                    location: req.query.location,
                    price: req.query.price,
          };
          if (query) {
                    const qResponse = await knex("meal")
                              .where({ meal_id: req.query.id })
                              .update(query);
                    if (qResponse) {
                              res.send("data updated");
                    }
          }
});*/

//meal with Maxprice
router.get("/", async (req, res) => {
          try {
                    const {
                              maxPrice,
                              availableReservations,
                              title,
                              createAfter,
                              limit,
                    } = req.query;

                    if (maxPrice) {
                              const getPrice = parseInt(maxPrice);

                              const mealWithPrice = await knex("meal").where(
                                        "price",
                                        ">",
                                        getPrice
                              );

                              if (mealWithPrice == 0) {
                                        res.send(
                                                  "Sorry data does not exists"
                                        );
                              }
                              res.send(mealWithPrice);
                    } // end of if statement maxPrice

                    //meal with availablereservation
                    if (availableReservations) {
                              if (availableReservations == "true") {
                                        // if meal with reservation
                                        const mealsWithReservation = await knex(
                                                  "meal"
                                        )
                                                  .select("*")
                                                  .join(
                                                            "reservation",
                                                            "reservation.reservation_id",
                                                            "=",
                                                            "meal.meal_id"
                                                  );
                                        res.send(mealsWithReservation);
                              } // end of meal with reservation
                              else if (availableReservations == "false") {
                                        // if reservation does not exists then all meals
                                        const allMeal = await knex(
                                                  "meal"
                                        ).select("*");
                                        res.send(allMeal);
                              }
                    } // end  of available reservations
                    //search by title
                    if (title) {
                              const mealTitle = await knex
                                        .from("meal")
                                        .select("*")
                                        .where("title", "like", `%${title}%`);
                              if (mealTitle.length == 0) {
                                        res.send(
                                                  "Sorry data does not exists any more"
                                        );
                              }

                              res.send(mealTitle);
                    } //end ot title search
                    // searh  by limit

                    if (limit) {
                              if (limit) {
                                        const getLimit = parseInt(limit);
                                        const mealWithLimit = await knex
                                                  .select("*")
                                                  .from("meal")
                                                  .limit(getLimit);
                                        res.send(mealWithLimit);
                              } else {
                                        res.send(
                                                  "Record does not exists"
                                        );
                              }
                    } // end of limit
                    if (createAfter) {
                              if (createAfter) {
                                        const getDate = createAfter;
                                        const mealWithDate = await knex(
                                                  "meal"
                                        ).where("created", "<", `${getDate}`);
                                        res.send(mealWithDate);
                              } else {
                                        res.send(
                                                  "Record does not exists"
                                        );
                              }
                    } //end of createdDate
          } catch (err) {
                    // end of try block
                    //Catch block
                    throw err;
          }
});
module.exports = router;
