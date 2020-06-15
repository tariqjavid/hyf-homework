
const meals=require('../data/meals.json')
const reviews=require('../data/reviews.json')

module.exports=(req,res)=>{

    const cheapMeal =meals.filter(meal=>meal.price<70)

    res.send(cheapMeal);
 }

 

