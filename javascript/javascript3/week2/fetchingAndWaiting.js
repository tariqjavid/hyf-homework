
  //USing .then()
  //Fetch some data from an api. and
  //After that data has been fetched, wait 3 seconds
  //Log out the data from the api
  
    fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(res=>res.json())
    .then(data=>
      {
        setTimeout(()=>{
          data.forEach(element => {console.log(element)
          });
        },3000) // end of settimeout
      }
      ).catch((err)=>{
        console.log(err)
      })
      
/*
//using async and await 
    async function displayMovies(){
      try{
        const resApi=await fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
        const data=await resApi.json();
        setTimeout(()=>{
          for(let i=0; i<data.length;i++)
          {
            console.log(data[i])
          }
        },3000)
      }
      catch(error){
        console.log(error)
      }
    }
    displayMovies()

*/