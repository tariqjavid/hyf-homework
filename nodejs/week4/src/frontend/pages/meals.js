window.handleMealsRequest = () => 
{
    template(body);// call template function
    
     function body(containerDiv)
     {
       const divBody=document.createElement('div')
       divBody.className='section';
       containerDiv.appendChild(divBody);
       containerDiv.appendChild(divBody);
        fetch("/api/meals")
        .then(response => response.json())
        .then(meals =>{
         meals.forEach(meals => 
          {
            const displayMeals=document.createElement('div');
            displayMeals.className='mealsBox';
            divBody.appendChild(displayMeals);
            displayMeals.innerHTML+=`<img class="mealImg" src=${meals.imgid} alt="Food image"/>`;
            displayMeals.innerHTML+=`<h1  class="mealName">${meals.title}</h1>`
            displayMeals.innerHTML+=`<p>${meals.description}</p>` 
            displayMeals.innerHTML+=`<p>Price:${meals.price}Kr</p>`
            displayMeals.innerHTML+=`<p>Location:${meals.location}</p>`  
            displayMeals.innerHTML+=`<a  href='reserve?id=${meals.id}' class="btn">Reserve</a>`
          });
        });
     }
  };
  