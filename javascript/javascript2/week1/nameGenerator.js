

const spiritAnimal=["The fullmoon wolf","merciful lion","fast rabit","greedy Dog"];

document.getElementById("myBtn").addEventListener("click", function() {
    let userInput=document.getElementById("myText").value;

    if(userInput=="tariq")
    {
        let name=spiritAnimal[Math.floor(Math.random() * spiritAnimal.length)];
        let res=userInput+":"+name;
        document.getElementById('para').textContent=res; 
        
    }  
    
    if(userInput=="")
    {
        let y="please enter here"
        document.getElementById("myText").value=y;
    }

});

function empty()
{
    document.getElementById("myText").value="";
    
    document.getElementById('para').textContent="";
}

// code for mouseover

/*
const spiritAnimal=["The fullmoon wolf","merciful lion","fast rabit","greedy Dog"];

document.getElementById("myBtn").addEventListener("mouseover", function() {
    let userInput=document.getElementById("myText").value;

    if(userInput=="tariq")
    {
        let name=spiritAnimal[Math.floor(Math.random() * spiritAnimal.length)];
        let res=userInput+":"+name;
        document.getElementById('para').textContent=res; 
        
    }  
    
    if(userInput=="")
    {
        let y="please enter here"
        document.getElementById("myText").value=y;
    }

});

function empty()
{
    document.getElementById("myText").value="";
    
    document.getElementById('para').textContent="";
}
*/

