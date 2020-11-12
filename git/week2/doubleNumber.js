

//Doubling of number
let numbers = [1, 2, 3, 4];
/*let newNumbers = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
}

*/

let evenNumber=numbers.filter(x=>x%2!==0) 
let doubleNumber=evenNumber.map(x=>x*2)
console.log(`The doubled numbers are ${doubleNumber}`);








