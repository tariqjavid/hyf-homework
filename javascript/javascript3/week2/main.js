
 const redB=document.querySelector('ul.marks li:nth-child(1)');
 const blueB=document.querySelector('ul.marks li:nth-child(2)');
 const greenB=document.querySelector('ul.marks li:nth-child(3)');

//translateOneByOne - Should translate the circles one at a time....
 const translateOneByOne=()=>
 { 

    const promise1=(()=>{
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            moveElement(redB, {x: 20, y: 300})   
            resolve('Element has been moved');          
         },00)
        })
    });
    const promise2=(()=>{
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            moveElement(greenB, {x: 400, y: 20})  
            resolve('Element has been moved');
        },1000)
        })
    });
    const promise3=(()=>{
         return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             moveElement(blueB, {x: 400, y: 300})  
            resolve('Element has been moved');
         },2000)
        })
     });
       Promise.all([promise1(),promise2(),promise3()]).then((values)=>{
        console.log((values[0]))
     })
 }
 translateOneByOne();



//translateAllAtOnce - Should translate all the circles at the same time ....

/*
    translateAllAtOnce=()=>{
        return new Promise((resolve)=>{
            moveElement(redB, {x: 20, y: 300});
            moveElement(greenB, {x: 400, y: 20});
            moveElement(blueB, {x: 400, y: 300});
           resolve('Element has been moved')
        
        })
    }
    translateAllAtOnce().then((res) => {
        console.log(res);
    });

*/