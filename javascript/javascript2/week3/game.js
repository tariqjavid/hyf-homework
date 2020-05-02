
const LTag=document.getElementById("plL")
const STag=document.getElementById("plS")
const btn=document.getElementById("btn");
const amountOftime=document.getElementById("amountOftime")
const winner=document.getElementById("winner")
const el = document.querySelector("p")
const reset=document.getElementById("reset")
let flag=true;
let countL =0;
let countS=0;

let pressKey=(e)=>{  // key press function 
 if(flag)
 {
    if(event.target.id=="btn")
    {     
        if(e.code === 'KeyL')
        {
          countL++;
        LTag.innerHTML=countL; 
        
        }
        if(e.code === 'KeyS')
        {
          countS++;
        STag.innerHTML=countS; 
    } 
}
}

 else{  
    
    if(countL>countS)
    {
     winner.innerHTML= `Player L  wins by:${countL-countS} points`    
    }
    else if(countL===countS){
        winner.innerHTML="Game is  50/50 and try again"
    }
    else {
        winner.innerHTML=`Player S wins by ${countL-countS} points`
   }    
}
} // end if keypress function

window.addEventListener('keydown',pressKey)

// start of click function.
const clickFunction=()=>
{
 const gameDuration=(amountOftime.value)*1000;

setTimeout(() => { //time out  function
       
    flag=false;

    
},gameDuration);

}

btn.addEventListener('click',clickFunction)
 
reset.addEventListener('click',()=>{   // reset the game.

    location.reload();
})

  