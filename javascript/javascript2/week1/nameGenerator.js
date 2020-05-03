

const spiritAnimal=["The fullmoon wolf","merciful lion","fast rabit","greedy Dog"];

const names=document.getElementById('names');
document.getElementById("myBtn").addEventListener("click", function() {
    const userInput=document.getElementById("names").value;

    if(userInput)
    {
        let name=spiritAnimal[Math.floor(Math.random() * spiritAnimal.length)];
    
        let res=userInput+"-"+name;
        document.getElementById('para').textContent=res; 
        
    }  
    
    if(userInput=="")
    {
        const y="please enter here"
        document.getElementById("myText").value=y;
    }

});



 
