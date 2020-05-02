

//Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments
notThisFunctionName=(time,stringTolog)=>{

         let sec=time*1000;
        setInterval(function(){
         console.log(stringTolog)
        }, sec)
}
notThisFunctionName(10,"This string logged after 5 second");
notThisFunctionName(3,"This string logged after 3 second");



//Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.

 let btn=document.getElementById("btn")
 let show= document.getElementById("show")
 
 let =showUp=()=>{

      notThisFunctionName=(time,stringTolog)=>{

     let sec=time*1000;
     setInterval(function(){
 
         show.innerHTML=stringTolog;
        }, sec)
}
notThisFunctionName(10,"This string logged after 5 second");
 

 } // end of showup function

btn.addEventListener("click",showUp);


/*
Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the provided parameter function. Try call the third function once with the Earth function and once with the Saturn function
*/

let earthLoger=(a)=>{

    console.log("this is earth logger")
}

let saturnLogger=(b)=>{

    console.log("this is saturn logger")
}
function planetLogFunction(callback1,callback2){
     
     callback1();
     callback2();

}
planetLogFunction(earthLoger,saturnLogger)

