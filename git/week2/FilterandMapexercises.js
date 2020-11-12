

//Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.

const chaning=movies.map(x=>x).filter(x=>x.rating>6)

chaning.forEach(element => {console.log(element)
    
});




/*
Count the total number of movies containing any of following keywords: Surfer, 
Alien or Benjamin. So if there were 3 movies that contained Surfer, 
1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive?
*/

     let titleMovies=movies.filter(x=>{
         
        if(x.title.includes("Surfer"))
        {
         return x;
        }
        else if(x.title.includes("Alien"))
        {
        return x;
        }
        else if(x.title.includes("Benjamin"))
        {
 
      return x;       
        }
    })
 
      //titleMovies.forEach(element => {console.log(element)});
   console.log(`The totlal No. of Movies:${titleMovies.length}`);
     

  //Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated

  
 let duplicateMovies=movies.filter(x=>{

   if(x.title.includes("Wars"))
   {

    return x
   }
 })

 duplicateMovies.forEach(element => {console.log(element)
     
 });




//Calculate the average rating of all the movies using reduce. Optional

    let averageRating=movies.reduce((total,value,index,array)=>{
    
       return (total+value.rating/array.length)
    },0)

    console.log(averageRating);



//Count the total number of Good, Average and Bad movies using reduce. 

let arr=[1,2,3,4]

let totalMovies=movies.reduce((total,value,index,array)=>{
    
    return (array.length)
 },0)

 console.log(`Total No of movies good, average and bad: ${totalMovies}`);

