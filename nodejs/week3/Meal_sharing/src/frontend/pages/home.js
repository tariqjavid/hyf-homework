window.handleHomeRequest = () => 
{
  template(body);// call template functions
  function body(containerDiv)// make body function
  {
    const wraper=document.createElement('div')
    wraper.className='wraper';
     containerDiv.appendChild(wraper);
     const h2=document.createElement('p');
     wraper.appendChild(h2)
     h2.className="info"
     h2.textContent='you can search some sort of Pakistani meals like Biriyani ,Haleem'
     const divBody=document.createElement('div')
     divBody.className='section';
     wraper.appendChild(divBody);
     const input=document.createElement('input');
     wraper.appendChild(input)
     input.className="search";
     input.setAttribute("type","text");
     input.addEventListener('keypress',(e)=>{
           fetch("/api/meals")
          .then(response => response.json())
          .then(meals =>{
            const getmeals=meals.filter(meals=>meals.title.toLowerCase()==input.value.trim().toLowerCase())
            getmeals.forEach(meals => {
            console.log(meals)
            const displayMeals=document.createElement('div');
            displayMeals.className='homeSearch';
             divBody.appendChild(displayMeals);
            displayMeals.innerHTML+=`<img class="mealImg" src=${meals.imgid} alt="Food image"/>`;
            displayMeals.innerHTML+=`<h1  class="titlename">${meals.title}</h1>`
            displayMeals.innerHTML+=`<p> ${meals.description}</p>` 
            displayMeals.innerHTML+=`<p>price:${meals.price}Kr</p>`
            displayMeals.innerHTML+=`<p>Location:${meals.location}</p>`        
            displayMeals.innerHTML+=`<a href="reserve?id=${meals.id}" class="btn">Reserve</a>`
              
            });
          });
     })
   } 
  router.updatePageLinks();
};
