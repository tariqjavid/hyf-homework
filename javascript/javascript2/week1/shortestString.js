

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

function notThisFunctionNam(arr) {
	return  arr.reduce(
        
        function(pW,cW)
        
        {
         
		if (cW.length < pW.length) {
			return cW;
		}
		else 
			return pW;
    } )
  
}

let res=notThisFunctionNam(danishWords);
console.log(res);
