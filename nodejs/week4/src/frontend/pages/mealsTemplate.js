
  function template(body)
  {
  const containerDiv=document.createElement('div');
  containerDiv.className='container';
  document.body.appendChild(containerDiv);
  
  //header
  const headerDiv=document.createElement('div');
  containerDiv.appendChild(headerDiv);
  headerDiv.className='header';
 

  //logo
  const newimg=document.createElement('img');
  headerDiv.appendChild(newimg);
  newimg.setAttribute("src", "https://i.postimg.cc/9Q4Dnk5Y/asiancuisine.png");
  newimg.setAttribute("alt", "asiancuisine_logo");
    

  //dispaly name of page as sessio 
  function session()
  {
    if(sessionStorage.getItem('name'))
    {
       return sessionStorage.getItem('name').toUpperCase();
    }
    else{
       return sessionDiv.textContent='Sign in'
    }
  }
  const sessionDiv=document.createElement('div');
  headerDiv.appendChild(sessionDiv);
  sessionDiv.className="sessionName"
  sessionDiv.innerHTML=session();

  //end
  
  //sighout 
  if(sessionStorage.getItem('name'))
  {
  sessionDiv.addEventListener('mousemove',()=>{
    sessionDiv.textContent='Signout'
  })
}
  sessionDiv.addEventListener('mouseout',()=>{
    sessionDiv.textContent=sessionStorage.getItem('name')
  })
  sessionDiv.addEventListener('click',()=>{
    sessionStorage.clear();
    window.location.assign("signin") 
  });



  //menubar
  const menubarDiv=document.createElement('div');
  containerDiv.appendChild(menubarDiv)
  const menubarUl=document.createElement('ul');
  menubarUl.className='menubar';
  menubarDiv.appendChild(menubarUl);
  menubarUl.innerHTML=`
  <li><a href="home">HOME</a></li>
  <li><a href="meals">MEALS</a></>
  <li><a href="joinus">JOIN US</a></li>
  <li><a href="yourReservation">RESERVATION</a></li>
  <li><a href="sharemeal">SHARE MEAL</a></li>
  <li><a href="contactus">CONTACT US</a></li>
  `;
  body(containerDiv);
  //footer
  const divFooter=document.createElement('div');
  containerDiv.appendChild(divFooter);
  divFooter.innerHTML=`<ul class="footer">
  <li>© Asian Cuisine 2020 </li>
  <li>Enghavevej 80,2450,sydhavn</li>
  <li>Tlf: 71726248</li>
  <li> Powered by Tariq Javid</li>
  </ul>`;
  }
 
 
 
 
  