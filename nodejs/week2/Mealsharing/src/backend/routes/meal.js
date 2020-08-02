const meals = require("../data/meals.json");
const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
          // default route to access the all meals
          if (!meals) {
                    res.status(404).send("Data does not exists");
          }
          res.send(meals);
});
router.get("/:id", (req, res) => {
          // route with id
          const getId = parseInt(req.params.id);
          const getMeal = meals.filter((meal) => meal.id === getId);
          if (!getMeal.length) {
                    res.status(404).send("Meal does not  exists of this id");
          }
          res.send(getMeal);
});

router.get("/meals", (req, res) => {
          // Query method
          const { maxPrice, title, createdAfter, limit } = req.quer;
          if (maxPrice) {
                    //using maxPrice
                    const getPrice = parseInt(req.query.maxPrice);
                    const getMeal = meals.filter(
                              (meal) => meal.price < getPrice
                    );
                    if (!getMeal.length) {
                              res.status(404).send(
                                        "Meal does not  exists of this price"
                              );
                    }
                    res.send(getMeal);
          } else if (title) {
                    //using title
                    const getTitle = req.query.title;
                    /* const exp = getTitle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                    const pattern = new RegExp(
                              "(?:^|\\W)" + exp + "(?:$|\\W)",
                              "i"
                    );

                    const getMeal = meals.filter((meal) =>
                              pattern.test(meal.title)
                    );*/
                    const getMeal = meals.filter((item) => {
                              return item.title
                                        .toLowerCase()
                                        .includes(getTitle.toLowerCase());
                    });
                    if (!getMeal.length) {
                              res.status(404).send(
                                        "Meal does not  exists of this price"
                              );
                    }
                    res.send(getMeal);
          } else if (createdAfter) {
                    //using createdAfter date
                    const getDate = Date.parse(req.query.createdAfter);

                    const getMeal = meals.filter(
                              (meal) => Date.parse(meal.createdAt) > getDate
                    );
                    if (!getMeal.length) {
                              res.status(404).send(
                                        "Meal does not  exists on this date"
                              );
                    }
                    res.send(getMeal);
          } else if (limit) {
                    // using limit
                    const getLimit = parseInt(req.query.limit);
                    const getMeal = meals.splice(0, getLimit);

                    if (!getMeal.length) {
                              res.status(404).send(
                                        "Meal does not  exists on this date"
                              );
                    }
                    res.send(getMeal);
          }
});
module.exports = router;
