
const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");

module.exports=(req, res)=> {
  let randomMealNumber = Math.floor(Math.random() * meals.length);
  const randomMeal = meals[randomMealNumber];
  const x = randomMeal.id;

  const randomMealReview = reviews.filter(review => {
    if (randomMeal.id == review.mealId) {
      res.send(review) ;
    }
  });
};

