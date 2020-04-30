
//Searching for a song
const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
  ];
  // add song
  myFavSong={
  
  songId:5,
  title:"Ai Mare Hum Safer",
  artist:"jageet sing"
  };
  
  function addSong( song)
  {
  
  songDatabase.push(song);
  console.log(songDatabase);
  
  }
  
   addSong(myFavSong);

  //searching songs
   function getSongByTitle(title)
 
   {
    
    return indexNo=songDatabase.findIndex(x=>x.title===title);// pass anonymous function in findindex function 

   }
   let songIndex=getSongByTitle('Blacker than black');  // getSongByTitle is called here

   function songDisplay() //display function

   {
    
    if(songIndex)
    {
        console.log("Song Id:"+songDatabase[songIndex].songId+"\n"+ "Song title:"+songDatabase[songIndex].title +"\n "+"Song artist"+songDatabase[songIndex].artist);
    }
    else{

        console.log("Sorry!this song is not exist in the play list");
    }
    
   }
   songDisplay()

  
