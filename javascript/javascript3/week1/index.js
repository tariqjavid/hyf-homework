
// weahther check weather of city  

        const btn=document.getElementById("btn")
        const cityName=document.getElementById("cityName")
        const outPut=document.getElementById("outPut")
        let tagUl=document.createElement("ul");
        outPut.appendChild(tagUl)
        let tagli=document.createElement("li")
        tagUl.appendChild(tagli);
        tagli.style.listStyle="none";
        let linebreak = document.createElement("br");

                                //fucntion to convert timestamp to human readable
          function Unix_timestamp(t)
          {
          var dt = new Date(t*1000);
          var hr = dt.getHours();
          var m = "0" + dt.getMinutes();
          var s = "0" + dt.getSeconds();
          return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);  
          }
    
        const fetchData=(e)=>{
        let cN=cityName.value;
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${cN}&appid=1adb54dd9161a302a8ef83f324cafd2a&units=metric`;

     fetch(url)
    .then(response=>response.json())   
    .then((data)=>{
     console.log(data)
        
        outPut.style.margin="50px 10px 20px 30px"
        tagli.innerHTML=`Country Name:${data.sys.country}` 
        tagli.style.color="green"
         tagli.appendChild(linebreak );
         tagli.innerHTML+=`City Name:${data.name}`;
         tagli.appendChild(linebreak );
         tagli.innerHTML+=`Temprature:${data.main.temp}C°`;
         tagli.appendChild(linebreak );
          tagli.innerHTML+=`Clouds:${data.weather[0].description}`;
           tagli.appendChild(linebreak );
          tagli.innerHTML+=`Wind:${data.wind.speed}km/h`;
          tagli.appendChild(linebreak );
          tagli.innerHTML+=`Sunrise:${Unix_timestamp(data.sys.sunrise)}`;
          tagli.appendChild(linebreak );
          tagli.innerHTML+=`Sunset:${Unix_timestamp(data.sys.sunset)}`;
}).catch(err=>alert("wrong city name!"))

}
btn.addEventListener('click',fetchData)





