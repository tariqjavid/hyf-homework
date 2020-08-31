window.handleShareMealRequest = () => {

  
    template(body);
      // make sure the backend api works before working with it here
      
      function body(containerDiv){
  

        if(!sessionStorage.getItem('id'))
          {
            window.location.assign('signin');
          }
        const divBody=document.createElement('div')
        divBody.className='section';
        
        containerDiv.appendChild(divBody);
        const joinUS=document.createElement('div')// fill the form div
          divBody.appendChild(joinUS);
          joinUS.className='joinus';

       
          

              joinUS.innerHTML=`<form  id=myFrom action="../../api/meals" method="post"><h2>Share Meal</h2>
                              <div class="innerDiv"><div class="outerDiv"><lable>Title</lable><input required name="title" id="mytitle" type="text" class="textBox"></input></div>
                              <div class="outerDiv"><lable>Description</lable><textarea  required name="description"class="textBox"></textarea></div>
                              <div class="outerDiv"><lable>Location</lable><input type="text"  required name="location"class="textBox"></input></div>
                              <div class="outerDiv"><lable>Price</lable><input type="text"name="price" required  class="textBox"></input></div> 
                              <div class="outerDiv"><lable>Max Reservations</lable><input type="text"  required id="guest"name="max_reservations" class="textBox" readonly></input></div>
                             <!-- <div class="outerDiv"><lable>Picture</lable><input type="file" name="file" id="myFile" class="textBox" required></input></div> -->
                            <div class="outerDiv"><input type="submit" class="btn"></input></div></div></form>`;
                                  //auto guest fill box
                                  maxGuest(document.querySelector('#guest'));


                            /*

                              const myFile=document.querySelector('#myFile');
                              const myForm=document.querySelector('#myForm');
                              
                              
                              myForm.addEventListener('submit',(e)=>{
                                  e.preventDefault();
                                
                                const url='../../api/meals'
                                const formData=new FormData();
                               formData.append('myForm',myFile)
                               
                                console.log(myFile.files)
                                fetch(url,{method:'post',
                                            body:formData
                                }).then(res=>res.json())
                                  .then(data=>console.log(data))

                              })*/
           
       }
    };