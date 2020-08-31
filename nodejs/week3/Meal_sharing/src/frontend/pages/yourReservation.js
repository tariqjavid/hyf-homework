window.handleyourReservationRequest = () => 
{
    template(body);// call template function
    
     function body(containerDiv)
     {
       const divBody=document.createElement('div')
       divBody.className='section';
       containerDiv.appendChild(divBody);
       containerDiv.appendChild(divBody);
        fetch("/api/reservations")
        .then(response => response.json())
        .then(reserve =>{
            const getreservation=reserve.filter(reserve=>reserve.user_id==sessionStorage.getItem('id'))

            console.log(getreservation)
            if(!sessionStorage.getItem('id'))

            {
               window.location.assign('signin'); 
            }
            getreservation.forEach(meals => 
          {
            const displayMeals=document.createElement('div');
            displayMeals.className='mealsBox';
            divBody.appendChild(displayMeals);
            displayMeals.innerHTML+=`<img class="mealImg" src=${meals.imgid} alt="Food image"/>`;
            displayMeals.innerHTML+=`<h1  class="mealName">${meals.title}</h1>`
            displayMeals.innerHTML+=`<p>${meals.description}</p>` 
            displayMeals.innerHTML+=`<p>Price:${meals.price}Kr</p>`
            displayMeals.innerHTML+=`<p>Location:${meals.location}</p>`  
          });
        });
     }
  };
  