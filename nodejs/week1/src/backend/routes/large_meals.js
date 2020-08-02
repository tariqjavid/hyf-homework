const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");

module.exports=(req, res)=>{
  const largMealReviews = meals.map(meal => {
    meal.review ==reviews.filter(review => {
        return meal.id == review.mealId;
      });

    res.send(meal);
  });

  const largMealGuest = meals.filter(meal => {
    if (meal.maxNumberOfGuests > 5) {
      res.send(meal) ;
    }
  });
}

