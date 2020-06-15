
const routerLargeMeal=require('./routes/large_meals.js');
const meal=require('./routes/meal');
const express=require('express');
const reservationRouter=require('./routes/reservation.js');
const mealRouter=require('./routes/meal.js');
const routerCheapMeal=require('./routes/cheap_meals.js');
const app=express();

app.get('/reservation',reservationRouter);
app.get('/meal',mealRouter);
app.get('/cheap-meal',routerCheapMeal);
app.get('/large-meal',routerLargeMeal);
app.listen(3000);


