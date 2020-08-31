const knex = require("../database");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
          try {
                    const allReviews = await knex.from("review").select("*");
                    if (allReviews.length == 0) {
                              res.send("Sorry data does not exists any more");
                    }

                    res.send(allReviews);
          } catch (err) {
                    throw err;
          }
});
router.get("/:id", async (req, res) => {
          try {
                    const reviewId = req.params.id;
                    const reviewWithId = await knex
                              .from("review")
                              .select("*")
                              .where({ review_id: reviewId });

                    if (reviewWithId.length == 0) {
                              res.send(
                                        "Sorry data does not exists"
                              );
                    }
                    res.send(reviewWithId);
          } catch (err) {
                    throw err;
          }
});

router.delete("/:id", async (req, res) => {
          const reviewsId = { review_id: req.params.id };

          if (reviewsId) {
                    const qResponse = await knex("review")
                              .where(reviewId)
                              .del();
                    if (qResponse) {
                              res.send("Record deleted");
                    }
          }

          res.send("Please enter Id to delete record");
});

module.exports = router;
