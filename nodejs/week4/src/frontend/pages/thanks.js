window.handleThanksRequest = () => {

  
  template(body); // call body fuctions
 function body(containerDiv)
    {
      const divBody=document.createElement('div')
      divBody.className='section';
      containerDiv.appendChild(divBody);
      const joinUS=document.createElement('div')// fill the form div
      divBody.appendChild(joinUS);
      joinUS.className='joinus';
      joinUS.innerHTML=`<h2>Thanks for Submition</h2>
      <h2 class="thanks_back"><a href="home"> Click to further searching</a></h2>
         `;
              
     }
  };