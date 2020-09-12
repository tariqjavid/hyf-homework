window.handlesignInRequest = () => {

  
    template(body);
      // make sure the backend api works before working with it here
      
      function body(containerDiv)
      {
       const divBody=document.createElement('div')
        divBody.className='section';
         containerDiv.appendChild(divBody);
        const joinUS=document.createElement('div')// fill the form div
          divBody.appendChild(joinUS);
          joinUS.className='joinus';

              joinUS.innerHTML=`<h2>Sign in</h2>
            <div class="outerDiv"><lable>Email</lable><input type="text" id="email" name="email"class="textBox"></input></div>
            <div class="outerDiv"><lable>Password</lable><input type="text" id="password" name="password"class="textBox"></input></div>
            <div class="outerDiv"><input type="submit"value="Sign in" class="btn"></input> <h2><a  href="joinus">Sign up</a></h2></div></div>
            `;
            //code for signin
            const btn=document.querySelector('.btn');
            const email=document.querySelector('#email');
            const password=document.querySelector('#password');
        // end 
           btn.addEventListener('click',(event)=>{

                fetch("/api/users")
                .then(response => response.json())
                .then(users =>{

                if(!sessionStorage.getItem('name'))
                    {
                        const getUser=users.filter(user=>user.email==email.value && user.password==password.value);
                             if(getUser.length!=0)
                                {
                                    sessionStorage.setItem("name", getUser[0].name);
                                    sessionStorage.setItem("id", getUser[0].id);
                                    sessionStorage.setItem("email",getUser[0].email)
                                    window.location.assign("home")
                                     }
                                        else
                                            {
                                                window.location.assign("signin")
                                                    }
                    }

                    else
                    {
                        
                        window.location.assign("home") 
                    }  
        });// end of fetch
});//end of adlinstner
    }
    };