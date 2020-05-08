

//Create an array of bad movies
    badMovies=()=>{
    fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then((json)=>json.json())
    .then((movies)=>
    {
        const getMovies=movies.filter(movies=>movies.rating<5)// end of filter function
        getMovies.forEach(ele => {console.log(ele);
            
        });// end of foreach loop
        
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    badMovies(); // call function

//Creat an array of bad movies since year 2000
    badMovies2000=()=>{
    const url='https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'
    fetch(url)
    .then((json)=>json.json())
    .then((movies)=>
    {
        const getMovies=movies.filter(movies=>movies.rating<5 &&movies.year==2000)// end of filter function
        getMovies.forEach(ele => {console.log(ele)// end of foreach loop
            
        });
        
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    badMovies2000();// call function
