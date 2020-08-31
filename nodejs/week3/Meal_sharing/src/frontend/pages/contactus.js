window.handleContactUsRequest = () => {

  template(body);
  // make sure the backend api works before working with it here
  
  function body(containerDiv){

    const divBody=document.createElement('div')
    divBody.className='section';
    
    containerDiv.appendChild(divBody);
    const joinUS=document.createElement('div')// fill the form div
      divBody.appendChild(joinUS);
      joinUS.className='joinus';

          joinUS.innerHTML=`<form action="thanks" method="get"><h2>Fill following from</h2><div class="innerDiv"><div class="outerDiv" required><lable>Full Name</lable><input  type="text" class="textBox"></input></div>
                          <div class="outerDiv"><lable>Email</lable><input type="text" class="textBox" required></input></div>
                          <div class="outerDiv"><lable>write Message</lable><textarea class="textBox" required></textarea></div>
                   
                          <div class="outerDiv"><input type="submit" class="btn"></input></div></div></form>

       `;


       
            
   }  
   
        
       
    };