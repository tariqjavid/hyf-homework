//Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

 moviesRated = movies.map(x=>{ 
    if(x.rating>=7){
        x.tag = "good";
    } else if(x.rating>4 && x.rating<7)
    {
        x.tag="Average"
    
    } else if(x.rating<4){
    	x.tag = "bad";
    }
    return x;
})

moviesRated.forEach(element => {console.log(element)
    
});