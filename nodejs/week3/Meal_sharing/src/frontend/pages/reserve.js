

window.handleReserveRequest = () => 
{
  template(body);// call body function
       function body(containerDiv)
        {
         const divBody=document.createElement('div')
         divBody.className='section';
         containerDiv.appendChild(divBody);
        /* for picture code*/ 
          const Params=new URLSearchParams(window.location.search).get('id');
          
          // if user not register 
           if(!sessionStorage.getItem('id'))
          {
            window.location.assign('signin');
          }
          // else
          fetch("/api/meals")
          .then(response => response.json())
          .then(meals =>{
          const getId=meals.filter(meal=>meal.id==Params)
          getId.forEach(element => {
          divBody.innerHTML=`<form action ="../../api/reservations" method="post"> <div class="reserve"><div class="lpic" id ="1"><img src=${element.imgid}><h2>${element.title}</h2></div>
          <!-- for left form  -->
          <div class="rform">
          <div class="outerDiv"><lable>Meal Id</lable><input type="text" name="meal_id" class="textBox"  value=${element.id} readonly></input></div>
           <div class="outerDiv"><lable>Reservation Date</lable><input type="datetime-local" name="reservation_date" class="textBox"></input></div>
           <div class="outerDiv"><lable>User id</lable><input type="text" name=user_id   class="textBox" value= ${sessionStorage.getItem('id')} readonly></input></div> 
          <div class="outerDiv"><lable>No.of Guest</lable><input name=guest id="guest"class="textBox"></input></div>   
        <div class="outerDiv"><button class="btn">Send</button></div></div></div></div>
                                </div></div></form> `;
          
             //auto guest fill box
               maxGuest(document.querySelector('#guest'));

             // end


            

        
         
          /*
          const nameDiv=document.querySelector('#name');
          const emailDiv=document.querySelector('#email');
          const telephoneDiv=document.querySelector('#telephone');
          
   
          fetch("/api/users")
           .then(response => response.json())
           .then(users =>{
                const getuser=users.filter(user=>user.id==sessionStorage.getItem('id'))
               console.log(getuser)
              nameDiv.value=getuser[0].name;
               emailDiv.value=getuser[0].email;
               telephoneDiv.value=getuser[0].telephone

          })*/
          
          });//end of foreachloop
          
           });//end of .then block

          
          } // end of body function
    
    };



         