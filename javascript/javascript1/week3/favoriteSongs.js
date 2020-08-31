
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