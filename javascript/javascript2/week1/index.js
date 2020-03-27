

/*
const testProductName=["mobile","lapTop","TV","Tablet","SmartWatch"];




 function renderProducts(products)
 {

let ulElement = document.createElement('ul')
let sec=document.getElementById("products")

 sec.appendChild(ulElement);

for (let index = 0; index <products.length; index++) {
let newLi = document.createElement('li');
newLi.innerHTML = products[index];
ulElement.appendChild(newLi)
}

 }

 renderProducts(testProductName)
*/

const testProductName=[{
    id: 23771823,
    name: 'Flat screen',
    price: 4000,
    rating: 4.2,
    shipsTo: [ 'denmark', 'germany'],
},

{
    id: 23771824,
    name: 'Tv',
    price: 5000,
    rating: 4.5,
    shipsTo: [ 'Pakistan', 'Chin'],
},
{
    id: 237718236,
    name: 'Laptop',
    price: 9000,
    rating: 5,
    shipsTo: [ 'Sweden', 'Norway'],
},

];
 
 function renderProducts(products)
 {

for (let i= 0; i<products.length; i++) {
let ulElement = document.createElement('ul')
let sec=document.getElementById("products")
sec.appendChild(ulElement);
newLI = document.createElement('li');
newLI.innerHTML =`|${products[i].id}`;
newLI.innerHTML +=`|${products[i].name}`;
newLI.innerHTML +=`|${products[i].price}`;
newLI.innerHTML +=`|${products[i].rating}`;
newLI.innerHTML +=`|${products[i].shipsTo}`;

ulElement.appendChild(newLI)

}

 }

 renderProducts(testProductName)