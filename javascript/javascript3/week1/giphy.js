
    const divTag=document.querySelector(".container")
    const btn=document.getElementById("btn")
    const reSet=document.getElementById("reSet")
    const getData=()=>{
     let queryCatagori=search.value;
      if(!queryCatagori)
    {
        alert("please enter the in  search ")
    }

    let apiUrl=`http://api.giphy.com/v1/gifs/search?&api_key=XxWJEby7Gz2VL9lyDL4lUb9VzLt4sN8G&q=${queryCatagori}`;
    
  fetch(apiUrl)
            .then(res=>res.json())
            .then(ipData=>{
    for(let i=0;i<ipData.data.length;i++)  
    {
        let img=document.createElement("img")
        let pic=`${ipData.data[i].images.original.url}`
        img.style.padding="10px"
        img.setAttribute('src',`${pic}`)
        img.setAttribute("width", "304");
        img.setAttribute("height", "228");
        divTag.appendChild(img);
    }
    
}
    )}
btn.addEventListener('click',getData)
reSet.addEventListener('click',()=>{
    location.reload();

})


