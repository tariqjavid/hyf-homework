
function  makeUpYourOwnFunctionName(time){
    return new Promise((resolve)=>{
        setTimeout(resolve,time*1000)
    })
}
 makeUpYourOwnFunctionName(3)
 .then(() => {
     console.log('I am called asynchronously'); // logged out after 8 seconds
    })


/*
function  makeUpYourOwnFunctionName(time){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("I am called asynchronously")
        },time*1000)
    })
}
async function getData()
{
    let data=await makeUpYourOwnFunctionName(8);
    console.log(data)
}
getData();
*/









     