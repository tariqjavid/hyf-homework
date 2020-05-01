
    const divTag=document.querySelector(".container")
    const btn=document.getElementById("btn")
    const reSet=document.getElementById("reSet")
    const errorMassege=document.getElementById("errorMassege")
    const getData=()=>{
     let apiKey=search.value;
      if(!apiKey)
    {
        errorMassege.innerHtml="please enter the in  search ";
    }
    const apiUrl=`http://api.giphy.com/v1/gifs/search?&api_key=XxWJEby7Gz2VL9lyDL4lUb9VzLt4sN8G&q=${apiKey}`;
    
    fetch(apiUrl)
            .then(res=>res.json())
            .then(search=>{
         search.data.forEach(function(user){

        let img=document.createElement("img")
        let pic=`${user.images.original.url}`
        img.style.padding="10px"
        img.setAttribute('src',`${pic}`)
        img.setAttribute("width", "304");
        img.setAttribute("height", "228");
        divTag.appendChild(img);
                    
           });             
  }
    )}
btn.addEventListener('click',getData)
reSet.addEventListener('click',()=>{
    location.reload();

})


