const name= [];// use to save the name of  Benjamin

const questions={ // start of Object of questions
    
    question1:"Hello my name is Benjamin",
    question2:"I need information regarding to hackyourfuture",
    question3:"do you address of hackyourfuture ",
    question4:"Add fishing to my todo",
    question5:"Remove fishing from my todo",
    question6:"What is on my todo?",
    question7:"What day is it today?",
    question8:"what is 3 + 3",
    question9:"Set a timer for 4 minutes",
       
}

const answer={ // start of  Object of answers 
    answer1:(str)=>{
        const reg=/Benjamin/g;
        if(str.search(reg)!=-1)
        {
             name.push("Benjamin")
             
             if(name.length>1)
             {
                 return "But why are you asking 2 times?"
             }
             else{

                return "Nice to meet you Benjamin" 
             }
        }
    },
    answer2:"you can search on:https://www.hackyourfuture.dk/",
    answer3:"enghavevej 80 2450 københavn sv",
    answer4:"fishing added to your todo",
    answer5:"Removed fishing from your todo",
    answer6:"fishing and singing in the shower",
    answer7:()=>{
        const date= new Date();
        const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
        const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
        const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
        const currentDate = `${day}. Of ${month} ${year}`;
         return currentDate;
    },
    answer8:(str)=>{
        const patternForNum=/\d+/g;
        const patternForOperator=/([\+\*\-\/])/;   
        const  di = str.match(patternForNum);
        const  op = str.match(patternForOperator);
        const a=parseInt(di[0]);
        const b=parseInt(di[1]);
        const operator=op[0];
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
           return a / b;
         }
    },

    answer9:(str)=>{
          const pattern=/\d+/;
           let time=parseInt(str.match(pattern));
         setInterval(y=() => {
             return "Done"                 
         }, time*1000);
         return y();
    } 
}

function replace(re) // function use  to remove spaces.
{
    if(re)
    {
     return  re.replace(/\s+/g,'')
    }

}


function getReply(command)// getReply function body
{
    
    if(replace(questions.question1).localeCompare(replace(command))==0)
    {
       
         return answer.answer1(command);
         
    }
    if(replace(questions.question2).localeCompare(replace(command))==0)
    {
         return answer.answer2;
    }
    if(replace(questions.question3).localeCompare(replace(command))==0)
    {
         return answer.answer3;
    }
    if(replace(questions.question4).localeCompare(replace(command))==0)
    {
         return answer.answer4;

    }
    if(replace(questions.question5).localeCompare(replace(command))==0)
    {
         return answer.answer5;
    }
    if(replace(questions.question6).localeCompare(replace(command))==0)
    {
         return answer.answer6;
    }
    if(replace(questions.question7).localeCompare(replace(command))==0)
    {
         return answer.answer7();
    }
    if(replace(questions.question8).localeCompare(replace(command))==0)
    {
        return answer.answer8(command);
        
    }
    if(replace(questions.question9).localeCompare(replace(command))==0)
    {
        
        return (answer.answer9(command))
    }
    else{

        return "OOps!I can't recognize you please follow the  manual of this software"
    }    
}

const reply=getReply("Remove fishing from my todo")// calling of getReply function

 console.log(reply)

 //use this code to check if doble time "Benjamin" say to hi,

 //const reply1=getReply("Hello my name is Benjamin")

 //console.log(reply1)
