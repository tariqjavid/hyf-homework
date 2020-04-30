

  const note=[];

 function addNote(content,id)
 {

    if (typeof content === "string") {
        
          note.push({
            noteId:id,
            noteContnt:content
        
            });
   }
}
    
   function show(searchByid){

    for(i=0;i<note.length;i++)
    {
        if(note[i].noteId===searchByid)
        {
        //console.log(note[i].noteContnt);

        return note[i].noteContnt;
        }
        
    }
    
}

    function  logOutNotesFormatted()
    {

        for(let i=0;i<note.length;i++)
        {

            console.log("NotesID"+ "  :"+note[i].noteId +" "+"Content of Notes"+"  :"+note[i].noteContnt);
           
            
        }
        

    } 


       function getNoteFromId(id)
     {
           const d=show(id)
    
        if (d)
        {
          console.log(d);

        }
        else{

            console.log("pease select correct id");
        }
    }

 let question1="i have forgotten my laptop in home";
 let question2="I will remember always to take my notebook";
 let  question3="crona virus is very dangrous for  health";
  addNote(question1,1);
  addNote(question2,2);
  addNote(question3,3);
 
     getNoteFromId(2)
     console.log("\n");
    logOutNotesFormatted();








 
