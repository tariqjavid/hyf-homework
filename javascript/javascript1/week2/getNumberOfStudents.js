
var class07Students = ["Tariq","javid","khadmi","sajid","Peter","Larse"];
function addStudentToClass(name)
{

    let index=class07Students.indexOf(name);

    if(index==-1)

    {class07Students.push(name);
     for(let i=0;i<class07Students.length;i++)
     {
     console.log(class07Students[i]);
     }
    }
    else{
        console.log("Content already exists,please change entry");   
    }
    
    } 
   addStudentToClass("Queen");