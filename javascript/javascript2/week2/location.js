

let loc=document.getElementById("btn");
 
let locOfYou=()=>
{
    navigator.geolocation.getCurrentPosition((position)=>{
        
    console.log(` latitude:${position.coords.latitude} and  longitude:${position.coords.longitude}`)
})}// end of locOfLocation funtion

loc.addEventListener("click",locOfYou)

 