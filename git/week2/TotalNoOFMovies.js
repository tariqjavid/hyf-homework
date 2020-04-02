
//Count the number of movies made between 1980-1989 (including both the years)


let listOfMovies=movies.filter((x)=>{
    
    if(x.year>=1980 && x.year<=1989){
        return x

    }
     

})

listOfMovies.forEach(element => {console.log(element)
    
});

