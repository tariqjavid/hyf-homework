
fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then((res)=>res.json())
    .then((data)=>
    {
         for(let i=0; i<data.length;i++)
         {
             if(data[i].rating<7&&data[i].year==2000)
             {
                 badMovies(data[i])
                }
            }
        })
        .catch((err)=>{
            console.log(err)
        })
//Display fucntion of movies
function badMovies(BM)
{
    console.log(BM)//`Bad Movie(rating<7) that are released since 2000:
}



