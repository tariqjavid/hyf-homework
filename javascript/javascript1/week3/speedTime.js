
//When will we be there

const travelInformation = {
    speed: 50,//km/h
    destinationDistance: 432,//km 
  };

  function taravlingCalculator(travelInformation){

  
    let dec = travelInformation.destinationDistance/travelInformation.speed;

    let  hr = parseInt((dec));
    var mn = Math.round(((dec)-hr) * 60);
    return ("hours"+" "+ hr + " "+" Minuts"+" " + mn);
    
  }
  
  const travelTime = taravlingCalculator(travelInformation);
  console.log(travelTime);
   