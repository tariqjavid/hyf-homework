window.handlejoinUsRequest = () => {

  
    template(body);
      // make sure the backend api works before working with it here
      
      function body(containerDiv){
  
        const divBody=document.createElement('div')
        divBody.className='section';
        
        containerDiv.appendChild(divBody);
        const joinUS=document.createElement('div')// fill the form div
          divBody.appendChild(joinUS);
          joinUS.className='joinus';

              joinUS.innerHTML=`<form action="../../api/users" method="post"><h2>Sign Up</h2>
                              <div class="innerDiv"><div class="outerDiv"><lable>Full Name</lable><input name="name" type="text" class="textBox"></input></div>
                              <div class="outerDiv"><lable>Password</lable><input type="text" name="password"class="textBox"></input></div>
                              <div class="outerDiv"><lable>Email</lable><input type="text" name="email"class="textBox"></input></div>
                              <div class="outerDiv"><lable>Telephone</lable><input type="text"name="telephone" class="textBox"></input></div> 
                              <div class="outerDiv"><input type="submit" class="btn"></input></div></div></form>
 
           `;
                
       }
    };