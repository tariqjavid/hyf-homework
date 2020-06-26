const knex = require("../database");
const express = require("express");
const router = express.Router();

router.get("/reviews", async (req, res) => {
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
router.get("/reviews/:id", async (req, res) => {
          try {
                    const reviewId = req.params.id;
                    const reviewWithId = await knex
                              .from("review")
                              .select("*")
                              .where({ review_id: reviewId });

                    if (reviewWithId.length == 0) {
                              res.status(404).send(
                                        "Sorry data does not exists"
                              );
                    }
                    res.send(reviewWithId);
          } catch (err) {
                    throw err;
          }
});

router.delete("/reviews/:id", async (req, res) => {
          const reviewsId = { review_id: req.params.id };

          if (reviewsId) {
                    const qResponse = await knex("review")
                              .where(reviewId)
                              .del();
                    if (qResponse) {
                              res.status(404).send("Record deleted");
                    }
          }

          res.status(404).send("Please enter Id to delete record");
});

module.exports = router;
