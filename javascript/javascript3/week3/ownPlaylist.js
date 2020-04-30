

  // add song
  let myFavorite_songsList=[]; 
  function addSongs(song_Id,title_,artist_)
  {
 
    this.songId=song_Id;
    this.title=title_;
    this.artist=artist_;
        let newSong={
            songId:this.songId,
            title:this.title,
            artist:this.artist
        }
         myFavorite_songsList.push(newSong);

  }

  let song5=new addSongs(1,"My baby","Soggy socks");
  let song6=new addSongs(2,"3 nails in wood","The carpenters");
  
  function getSongByTitle(title) 
   {
     
  
     return  indexNo=myFavorite_songsList.findIndex(x=>x.title===title);// pass anonymous function in findindex function
              

   }
   let songIndex=getSongByTitle('3 nails in wood'); 
   
   function songDisplay() //display function
   { 
       if(songIndex){
        console.log("Song Id:"+myFavorite_songsList[songIndex].songId+"\n"+ "Song title:"+myFavorite_songsList[songIndex].title +"\n "+"Song artist"+myFavorite_songsList[songIndex].artist);
    
       }
       else{
        console.log("Sorry!this song is not exist in the play list");

       }
    
   }
   songDisplay()
   
  
