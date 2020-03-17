
//When will we be there

const travelInformation = {
    speed: 50,//km/h
    destinationDistance: 432,//km 
  };

  function notThisFunctionName(travelInformation){

  
    let dec = travelInformation.destinationDistance/travelInformation.speed;

    let  hr = parseInt(Number(dec));
    var mn = Math.round((Number(dec)-hr) * 60);
    return ("hours"+" "+ hr + " "+" Minuts"+" " + mn);
    
  }
  
  const travelTime = notThisFunctionName(travelInformation);
  console.log(travelTime);
   
