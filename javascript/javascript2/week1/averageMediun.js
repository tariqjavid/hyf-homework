
 const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

 
 let sum=0;

   function average(hp){
   for(let i=0;i<hp.length;i++){

    let result=hp[i];
     sum=sum+result;  
}

  let res=sum/hp.length;
 return res;

}
 
console.log(average(housePrices));



function mediun( arr)
{
const len = arr.length;
const mid = Math.ceil(len / 2);
let res;
if(len%2==1)
{ 
       let num = mid-1;
       res="Mediun is"+housePrices[num]; 
       return res;
   
}

if(len%2==0)
{
  
       let num = mid-1;

        res="Mediun is " + housePrices[num]+" "+ "and" +" "+housePrices[mid];
       return res;


}
}
 console.log(mediun(housePrices));
