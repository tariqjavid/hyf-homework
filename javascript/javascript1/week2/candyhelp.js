
 let candy=[];
 function addCandy(candtype,weight)
 {
   
    let price;
    if(candtype=="Sweet")
    {
         price=.5*weight;
         push();
    }

    else if(candtype=="Chocolate")
    {
         price=.7*weight;
         push();
    }
    else if(candtype=="Toffee")
    {
         price=1.1*weight;
         push();
    }
    else if(candtype=="Chewing-gum")
    {
         price=.03*weight;
         push();
    }

candy.forEach(function(en) {
    console.log(en);
    
});
  function push()
{
     return candy.push("CandyType: "+candtype,"Weight :"+weight,"Price :"+price);
}


} // end of addcandy function
addCandy("Chocolate",200 )



