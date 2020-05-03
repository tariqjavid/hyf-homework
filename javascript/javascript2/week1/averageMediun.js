
 const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

   function average(hp){
       let sum=0;
   for(let i=0;i<hp.length;i++){
     sum+=hp[i];;  
}

  return sum/hp.length;
 

}
 
console.log('Average house Price:',average(housePrices));

  function median (arr){
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
console.log(median(housePrices));

