
//eate an array of movies containing the movies with a short title (you define what short means)
let shortTitle=movies.filter(x=>{
    
    let l=x.title;
    if(l.length<20)
    {
        return x
    }  
      
   })
    shortTitle.forEach(element => {console.log(element)
   
       
        
    });

    //Create an array of movie titles with long movie titles
   
    let longTitle=movies.filter(x=>{
       
       let l=x.title;
       if(l.length >20)
       {
           return x
       }  
         
      })
   longTitle.forEach(element => {console.log(element)
       
   });